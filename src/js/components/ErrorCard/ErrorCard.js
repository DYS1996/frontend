import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Card, CardHeader, CardMedia } from '@material-ui/core';
import NotFound from './404.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ErrorCard(props) {
    const { msg } = props;
    const theme = useTheme();
    const upSm = useMediaQuery(theme.breakpoints.up('sm'));
    const upMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Card>
            <CardHeader
                title={msg}
                titleTypographyProps={{
                    variant: upMd ? 'h4' : upSm ? 'h5' : 'h6',
                    align: 'center',
                }}
            />
            <Grid container justify="center">
                <Grid item xs={6}>
                    <Box my={3}>
                        <CardMedia
                            component="svg"
                            image={NotFound}
                            style={{
                                width: '100%',
                            }}
                            viewBox="0 96 853 656"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

ErrorCard.propTypes = {
    msg: PropTypes.string.isRequired,
};
