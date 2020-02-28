import React from 'react';
import PropTypes from 'prop-types';
import {
    Backdrop,
    Grid,
    CircularProgress,
    CardHeader,
    Modal,
    Card,
    CardContent,
} from '@material-ui/core';

export default function Manager(props) {
    const { pastDelay = false, error, timeout } = props;
    if (error || timeout) {
        console.error(error);
        return <Error />;
    }
    return (
        <Backdrop open={pastDelay}>
            <CircularProgress />
        </Backdrop>
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
                            <CardContent>
                                Please refresh or back to homepage
                            </CardContent>
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
