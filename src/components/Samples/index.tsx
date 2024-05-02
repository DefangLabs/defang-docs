import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Grid, List, ListItemButton, ListItemText, Stack, TextField } from '@mui/material';
import Fuse, { FuseResult } from 'fuse.js';
import { Fragment, ReactNode, useDeferredValue, useMemo, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { capitalCase } from 'change-case';
import CodeBlock from '@theme/CodeBlock';
import ExternalLink from '@theme/Icon/ExternalLink'


interface Sample {
    name: string;
    category: string;
    readme: string;
}

interface SamplesProps {
    samples: Sample[];
}

const categoryColors = {
    python: '#FFFFE0',
    nodejs: '#90EE90',
    golang: '#ADD8E6',
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




export default function Samples({ samples }: SamplesProps) {
    const titled = samples.map((sample) => ({
        ...sample,
        displayName: capitalCase(sample.name),
    }));
    type TitledSample = typeof titled[0];
    const [filter, setFilter] = useState("");
    const [selectedSample, setSelectedSample] = useState<TitledSample | null>(null);

    const fuse = useRef(new Fuse(titled, {
        keys: ['displayName', 'category', 'readme'],
        includeMatches: true,
        isCaseSensitive: false,
        threshold: 0.25,
    })).current;
    const deferredFilter = useDeferredValue(filter);
    const results = useMemo((): FuseResult<TitledSample>[] => {
        if (!deferredFilter) {
            return titled.map((item, i) => ({
                item,
                score: 0,
                refIndex: i,
                matches: [],
            }));
        }
        return fuse.search({
            $and: deferredFilter.split(/\s+/).map((word) => ({
                $or: [
                    { displayName: word },
                    { category: word },
                    { readme: word },
                ],
            })),
        });
    }, [deferredFilter]);

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
                                    {selectedSample.displayName}
                                </Box>
                                <Chip
                                    label={selectedSample.category}
                                    size='small'
                                    sx={{
                                        backgroundColor: categoryColors[selectedSample.category] || categoryColors['other'],
                                        ml: 1,
                                    }}
                                />
                            </Box>
                            <Box sx={{ flexGrow: 1 }} />
                            <Button sx={{
                                "&:hover": {
                                    // "color": "#FFF",
                                },
                                flexShrink: 0,
                            }} size='small' variant="text" href={`https://github.com/defang-io/defang/tree/main/samples/${selectedSample.category}/${selectedSample.name}`} target='_blank'>
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
                                    Clone and open the sample in your terminal
                                </small>
                                <CodeBlock language="bash">
                                    {`git clone https://github.com/defang-io/defang && cp -r defang/samples/${selectedSample.category}/${selectedSample.name} ./${selectedSample.name} && cd ${selectedSample.name}`}
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

                            let displayName: ReactNode = sample.displayName;
                            const displayNameMatched = matches.find((match) => match.key === 'displayName');

                            let category: ReactNode = sample.category;
                            const categoryMatched = matches.find((match) => match.key === 'category');

                            let readme: ReactNode = "";
                            const readmeMatched = matches.find((match) => match.key === 'readme');

                            if (displayNameMatched) {
                                displayName = highlightMatches(sample.name, [displayNameMatched]);
                            }
                            if (categoryMatched) {
                                category = highlightMatches(sample.category, [categoryMatched]);
                            }
                            if (readmeMatched) {
                                readme = getHighlightedTextWithContext(sample.readme, [readmeMatched]);
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
                                        primary={displayName}
                                        secondary={(
                                            <>
                                                <Chip component={"span"} label={category} size='small' sx={{ backgroundColor: categoryColors[sample.category] || categoryColors['other'] }} />
                                                {readmeMatched && (
                                                    <>
                                                        <br />
                                                        {readme}
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
