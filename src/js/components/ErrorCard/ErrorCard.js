import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Card, CardHeader, CardMedia } from '@material-ui/core';
import NotFound from './notFound.svg';
import { useWindowSize } from 'react-use';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ErrorCard(props) {
    const { subject } = props;
    const { width } = useWindowSize();
    const theme = useTheme();
    const upSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Card>
            <CardHeader
                title={`Oops.. ${subject} has something wrong`}
                titleTypographyProps={{
                    variant: upSm ? 'h4' : 'h5',
                    align: 'center',
                }}
            />
            <Grid container justify="center">
                <Box my={3}>
                    <CardMedia
                        image={NotFound}
                        style={{
                            height: (384 * width) / screen.width,
                            width: (384 * width) / screen.width,
                        }}
                    />
                </Box>
            </Grid>
        </Card>
    );
}

ErrorCard.propTypes = {
    subject: PropTypes.string.isRequired,
};
