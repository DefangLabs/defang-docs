
import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItemButton, ListItemText, Stack, TextField } from '@mui/material';
import CodeBlock from '@theme/CodeBlock';
import ExternalLink from '@theme/Icon/ExternalLink';
import Fuse, { FuseResult } from 'fuse.js';
import { Fragment, ReactNode, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Sample {
    name: string;
    category: string;
    readme: string;
    title?: string;
    shortDescription?: string;
    languages?: string[];
    tags?: string[];
}

interface SamplesProps {
    samples: Sample[];
}

const categoryColors = {
    python: '#FFFFE0',
    nodejs: '#90EE90',
    typescript: '#cabbff',
    golang: '#b8e4f3',
    go: '#b8e4f3',
    sql: '#ebaef4',
    ruby: '#FF7F7F',
    other: 'lightgray',
};

function highlightMatches(text: string, matches: FuseResult<Sample>['matches']) {
    let lastIndex = 0;
    const [match] = matches;
    const { indices } = match;
    const parts = [];
    for (const [start, end] of indices) {
        parts.push(text.slice(lastIndex, start));
        parts.push(<mark>{text.slice(start, end + 1)}</mark>);
        lastIndex = end + 1;
    }
    parts.push(text.slice(lastIndex));
    return (
        <>
            {parts.map((part, i) => <Fragment key={`${part}${i}`}>
                {part}
            </Fragment>)}
        </>
    );
}

/**
 * Returns react nodes with just the highlighted text and a few characters before and after. Each match is separated by an ellipsis.
 */
function getHighlightedTextWithContext(text: string, matches: FuseResult<Sample>['matches']) {
    let lastIndex = 0;
    const [match] = matches;
    const { indices } = match;
    const parts = [];
    for (const [start, end] of indices.slice(0, 3)) {
        if (start > lastIndex) {
            parts.push(text.slice(Math.max(0, lastIndex), Math.max(0, start - 5)));
            parts.push('...');
        }
        parts.push(<mark key={`${start}-${end}`}>{text.slice(start, end + 1)}</mark>);
        lastIndex = end + 1;
    }
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex, Math.min(lastIndex + 5, text.length)));
        parts.push('...');
    }
    return (
        <>
            {parts.map((part, i) => <Fragment key={`${part}${i}`}>
                {part}
            </Fragment>)}
        </>
    );
}




export default function Samples() {
    const [samples, setSamples] = useState<Sample[]>([]);
    const [filter, setFilter] = useState("");
    const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
    const [loading, setLoading] = useState(true);

    const fuse = useRef(new Fuse(samples, {
        keys: ['title', 'category', 'shortDescription', 'tags', 'languages'],
        includeMatches: true,
        isCaseSensitive: false,
        threshold: 0.3,
    })).current;

    useEffect(() => {
        const fetchSamples = async () => {
            const response = await fetch('/samples-v2.json');
            const samples = await response.json();

            fuse.setCollection(samples);

            setSamples(samples);
            setLoading(false);
        };
        fetchSamples();
    }, []);

    const deferredFilter = useDeferredValue(filter);
    const results = useMemo((): FuseResult<Sample>[] => {
        if (!deferredFilter) {
            return samples.map((item, i) => ({
                item,
                score: 0,
                refIndex: i,
                matches: [],
            }));
        }
        return fuse.search({
            $and: deferredFilter.split(/\s+/).map((word) => ({
                $or: [
                    { title: word },
                    { category: word },
                    { shortDescription: word },
                    { tags: word },
                    { languages: word },
                ],
            })),
        });
    }, [deferredFilter, samples]);

    return (
        <>
            <Dialog open={!!selectedSample} onClose={() => setSelectedSample(null)} fullWidth maxWidth="md" scroll='paper' PaperProps={{
                sx: {
                    maxHeight: 'calc(100vh - 100px)',
                }
            }}>
                {selectedSample && (
                    <>
                        <DialogTitle component="div" display="flex">
                            <Box>
                                <Box fontWeight="bold" component="span">
                                    {selectedSample.title}
                                </Box>
                                {(selectedSample.languages?.length ?? 0) > 0 && (
                                    selectedSample.languages?.map((language) => (
                                        <Chip
                                            label={language}
                                            size='small'
                                            sx={{
                                                backgroundColor: categoryColors[language] || categoryColors['other'],
                                                ml: 1,
                                            }}
                                        />
                                    ))
                                )}
                            </Box>
                            <Box sx={{ flexGrow: 1 }} />
                            <Button sx={{
                                "&:hover": {
                                    // "color": "#FFF",
                                },
                                flexShrink: 0,
                            }} size='small' variant="text" href={`https://github.com/DefangLabs/samples/tree/main/samples/${selectedSample.name}`} target='_blank'>
                                Open Sample
                                <ExternalLink />
                            </Button>
                        </DialogTitle>
                        <DialogContent sx={{ borderTop: '1px solid grey', borderBottom: '1px solid grey' }}>
                            <Box sx={{ py: 4 }}>
                                <ReactMarkdown>{selectedSample.readme}</ReactMarkdown>
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            {/* <Stack direction="row" justifyContent="center" px={1} spacing={2}> */}
                            <Box sx={{ flexGrow: 1, overflow: 'auto', '& .theme-code-block': { mb: 0 } }}>
                                <small>
                                    Use this sample (<b><a href="https://docs.defang.io/docs/getting-started#install-the-defang-cli" target="_blank">requires Defang CLI v0.5.21 or later</a></b>)
                                </small>
                                <CodeBlock language="bash">
                                    {`defang generate ${selectedSample.name}`}
                                </CodeBlock>
                            </Box>
                            {/* </Stack> */}
                        </DialogActions>
                    </>
                )}
            </Dialog>
            <Stack>
                <Box>
                    <TextField
                        label="Search samples"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        variant='filled'
                    />
                    {loading && (
                        <p>
                            Loading samples...
                        </p>
                    )}
                </Box>
                <List
                    sx={{
                        display: { xs: 'block', sm: 'grid' },
                        gridTemplateColumns: { sm: 'repeat(2, 1fr)' },
                    }}
                >
                    {results
                        .map((result) => {
                            const sample = result.item;
                            const {
                                matches
                            } = result;

                            let title: ReactNode = sample.title;
                            const titleMatched = matches.find((match) => match.key === 'title');

                            let category: ReactNode = sample.category;
                            const categoryMatched = matches.find((match) => match.key === 'category');

                            let shortDescription: ReactNode = sample.shortDescription.slice(0, 80);
                            if (sample.shortDescription.length > 80) {
                                shortDescription += '...';
                            }
                            const shortDescriptionMatched = matches.find((match) => match.key === 'shortDescription');

                            if (titleMatched) {
                                title = highlightMatches(sample.title, [titleMatched]);
                            }
                            if (categoryMatched) {
                                category = highlightMatches(sample.category, [categoryMatched]);
                            }
                            if (shortDescriptionMatched) {
                                shortDescription = getHighlightedTextWithContext(sample.shortDescription, [shortDescriptionMatched]);
                            }

                            return (
                                <ListItemButton
                                    key={`${sample.category}-${sample.name}`}
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                    }}
                                    onClick={() => setSelectedSample(sample)}
                                >
                                    <ListItemText
                                        primary={title}
                                        secondary={(
                                            <>
                                                {category && <Chip component={"span"} label={category} size='small' sx={{ backgroundColor: categoryColors[sample.category] || categoryColors['other'] }} />}
                                                {true && (
                                                    <>
                                                        <br />
                                                        {shortDescription}
                                                    </>
                                                )}
                                            </>
                                        )}
                                    />
                                </ListItemButton>
                            );
                        })}
                </List>
            </Stack>
        </>
    );
}
