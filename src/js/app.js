import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import CompLoading from './components/CompLoading';
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
                <Main upSm={upSm} />
                <Grid container direction="column">
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

function Main(props) {
    const { upSm } = props;
    return (
        <>
            <Grid item container justify="center">
                <Grid item xs={upSm ? 6 : 10}>
                    <Switch>
                        <Route exact path="/">
                            <CompLoading
                                loadFunc={() => import('./components/Posts')}
                            />
                        </Route>
                        <Route exact path="/post">
                            <CompLoading
                                loadFunc={() => import('./components/Post')}
                            />
                        </Route>
                        <Route>
                            <CompLoading
                                loadFunc={() =>
                                    import('./components/ErrorCard')
                                }
                                msg="Oops! this address is invalid"
                            />
                        </Route>
                    </Switch>
                </Grid>
            </Grid>
            <Route path="/post" exact>
                <Box mt={3}>
                    <Grid item container justify="center">
                        <Grid item xs={8}>
                            <CompLoading
                                loadFunc={() => import('./components/Comments')}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Route>
        </>
    );
}
