import { ReactNode, useDeferredValue, useMemo, useRef, useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Stack, TextField } from '@mui/material';
import Fuse, { FuseResult } from 'fuse.js'


interface Sample {
    name: string;
    category: string;
    readme: string;
}

interface SamplesProps {
    samples: Sample[];
}

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
    return parts;
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
    return parts;
}


export default function Samples({ samples }: SamplesProps) {
    const [filter, setFilter] = useState("");
    const fuse = useRef(new Fuse(samples, {
        keys: ['name', 'category', 'readme'],
        includeMatches: true,
        threshold: 0.7,
    })).current;
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
        return fuse.search(deferredFilter);
    }, [deferredFilter]);

    return (
        <Stack>
            <Box>
                <TextField
                    label="Search samples"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    variant='filled'
                />
            </Box>
            <List>
                {results
                    .map((result) => {
                        const sample = result.item;
                        const {
                            matches
                        } = result;

                        let name: ReactNode = sample.name;
                        const nameMatched = matches.find((match) => match.key === 'name');

                        let category: ReactNode = sample.category;
                        const categoryMatched = matches.find((match) => match.key === 'category');

                        let readme: ReactNode = "";
                        const readmeMatched = matches.find((match) => match.key === 'readme');

                        if (nameMatched) {
                            name = highlightMatches(sample.name, [nameMatched]);
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
                            >
                                <ListItemText
                                    primary={name}
                                    secondary={(
                                        <>
                                            {category}
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
    );
}
