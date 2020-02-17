import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import {
    AppBar,
    Box,
    Toolbar,
    List,
    ListItem,
    Collapse,
    Button,
    Grid,
    IconButton,
    Typography,
    ButtonGroup,
    useMediaQuery,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Link as RRLink, useLocation, Route } from 'react-router-dom';
import Search from './Search';
import { isEq } from '../../utils/URLUtil';

export default function TopBar(props) {
    const { links } = props;
    const [menuIn, setMenuIn] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const upSm = useMediaQuery(theme.breakpoints.up('sm'));
    const upMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <AppBar color="inherit">
            <Toolbar>
                <Grid container justify="space-between" alignItems="center">
                    <Typography variant="h5">RedHand</Typography>
                    {upSm ? (
                        <Box maxWidth={upMd ? undefined : 420}>
                            <Grid item>
                                <Grid
                                    container
                                    wrap="nowrap"
                                    alignItems="center"
                                    justify="flex-end"
                                >
                                    <Route component={() => <Search />} />
                                    <Box ml={2}>
                                        <Nav
                                            links={links}
                                            location={location}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    ) : (
                        <IconButton onClick={() => setMenuIn(prev => !prev)}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Grid>
            </Toolbar>
            {upSm ? null : (
                <CollapsedMenu menuIn={menuIn} links={links} upSm={upSm} />
            )}
        </AppBar>
    );
}

function Nav(props) {
    const { links, location } = props;
    return (
        <ButtonGroup color="primary" variant="contained">
            {links.map((e, i) => (
                <Button
                    disabled={isEq(location, e.to)}
                    key={i}
                    component={RRLink}
                    to={e.to}
                >
                    {e.name}
                </Button>
            ))}
        </ButtonGroup>
    );
}

function CollapsedMenu(props) {
    const { menuIn, links, upSm } = props;
    return (
        <Collapse in={menuIn && !upSm}>
            <Box borderTop={1} borderColor="primary.main">
                <List>
                    <ListItem>
                        <Search />
                    </ListItem>
                    {links.map((e, i) => (
                        <ListItem
                            key={i}
                            button
                            component={RRLink}
                            disabled={isEq(location, e.to)}
                            to={e.to}
                        >
                            {e.name.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Collapse>
    );
}

TopBar.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            to: PropTypes.shape({
                pathname: PropTypes.string,
                search: PropTypes.string,
                hash: PropTypes.string,
            }).isRequired,
        })
    ).isRequired,
};
