import React from 'react';
import PropTypes from 'prop-types';
import { Facebook } from 'react-content-loader';
import { Box, Card, CardContent } from '@material-ui/core';

export default function PostsLoading(props) {
    const { num } = props;
    const lds = new Array(num).fill(0).map((_, i) => (
        <Box my={2} key={i}>
            <Card>
                <CardContent>
                    <Facebook />
                </CardContent>
            </Card>
        </Box>
    ));
    return lds;
}

PostsLoading.propTypes = {
    num: PropTypes.number.isRequired,
};
