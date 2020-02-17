import React from 'react';
import { Route } from 'react-router-dom';
import Posts from './components/Posts';
import TopBar from './components/TopBar';
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
                <Grid container direction="column" spacing={10}>
                    <Route
                        exact
                        path={['/post', '/']}
                        render={({ match }) => (
                            <Grid item container justify="center">
                                <Grid item xs={upSm ? 6 : 10}>
                                    {match.path == '/post' ? (
                                        <Post />
                                    ) : (
                                        <Posts />
                                    )}
                                </Grid>
                            </Grid>
                        )}
                    />
                    <Route path="/post" exact>
                        <Grid item container justify="center">
                            <Grid item xs={8}>
                                <Comments />
                            </Grid>
                        </Grid>
                    </Route>
                    <Grid item container justify="center">
                        <Footer />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
