import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    CircularProgress,
    Slide,
    CardHeader,
    Box,
    Modal,
    Card,
    CardContent,
    Snackbar,
} from '@material-ui/core';

export default function Manager(props) {
    const { pastDelay, error, timedOut } = props;
    if (error) {
        console.error(error);
        return <Error />;
    }
    return (
        <>
            <Snackbar
                open={timedOut}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message="Slow Network? Maybe Refresh or Try later"
                TransitionComponent={Slide}
            />
            <Modal open={pastDelay}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    style={{ height: '100vh' }}
                >
                    <Grid item container justify="center">
                        <Grid item>
                            <CircularProgress />
                        </Grid>
                    </Grid>
                </Grid>
            </Modal>
        </>
    );
}

function Error() {
    return (
        <Modal open={true}>
            <Grid
                container
                style={{ height: '100vh' }}
                justify="center"
                direction="column"
            >
                <Grid item container justify="center">
                    <Grid item xs={3}>
                        <Card>
                            <CardHeader
                                title="Gah!!! website crashes"
                                titleTypographyProps="h1"
                            />
                            <Box mt={3}>
                                <CardContent>
                                    Please refresh or back to homepage
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    );
}

Manager.propTypes = {
    pastDelay: PropTypes.bool,
    error: PropTypes.instanceOf(Error),
    timeout: PropTypes.bool,
};
