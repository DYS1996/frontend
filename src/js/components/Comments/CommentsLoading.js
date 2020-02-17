import React from 'react';
import { Box, Paper } from '@material-ui/core';
import ContentLoader from 'react-content-loader';

export default function CommentsLoading() {
    return (
        <Paper variant="outlined" square>
            <Box p={4}>
                <Loading />
            </Box>
        </Paper>
    );
}

function Loading() {
    return (
        <ContentLoader viewBox="0 0 750 100">
            <rect x="10" y="25" rx="5" ry="5" width="100" height="15" />
            <rect x="10" y="50" rx="5" ry="5" width="700" height="15" />
            <rect x="10" y="75" rx="5" ry="5" width="700" height="15" />
        </ContentLoader>
    );
}
