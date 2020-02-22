import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from './components/Posts';
import TopBar from './components/TopBar';
import ErrorCard from './components/ErrorCard';
import Footer from './components/Footer';
import Comments from './components/Comments';
import Post from './components/Post';
import { Box, Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function App() {
    const theme = useTheme();
    const upSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>
            <TopBar
                links={[
                    { name: 'home', to: { pathname: '/' } },
                    {
                        name: 'about',
                        to: { pathname: '/post', search: '?id=1' },
                    },
                ]}
            />
            <Box mt={12}>
                <Grid container direction="column">
                    <Grid item container justify="center">
                        <Grid item xs={upSm ? 6 : 10}>
                            <Switch>
                                <Route exact path="/">
                                    <Posts />
                                </Route>
                                <Route exact path="/post">
                                    <Post />
                                </Route>
                                <Route>
                                    <ErrorCard msg="Oops! this address is invalid" />
                                </Route>
                            </Switch>
                        </Grid>
                    </Grid>
                    <Route path="/post" exact>
                        <Box mt={3}>
                            <Grid item container justify="center">
                                <Grid item xs={8}>
                                    <Comments />
                                </Grid>
                            </Grid>
                        </Box>
                    </Route>
                    <Box mt={7}>
                        <Grid item container justify="center">
                            <Footer />
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </>
    );
}
