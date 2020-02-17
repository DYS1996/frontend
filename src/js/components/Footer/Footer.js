import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import { CreativeCommons } from 'mdi-material-ui';
import {
    List,
    Box,
    ListItemText,
    Grid,
    ListSubheader,
    ListItem,
    ListItemIcon,
    Typography,
    Avatar,
    ListItemAvatar,
} from '@material-ui/core';

export default function Footer() {
    return (
        <Box borderTop={1} width={1} pt={2} borderColor="primary.main">
            <Grid container>
                <Grid item xs={12} sm={4} container justify="center">
                    <ContactList />
                </Grid>
                <Grid item xs={12} sm={4} container justify="center">
                    <FriendsList />
                </Grid>
                <Grid item xs={12} sm={4} container justify="center">
                    <LicenseInfo />
                </Grid>
            </Grid>
        </Box>
    );
}

function ContactList() {
    return (
        <List>
            <ListSubheader disableSticky>
                <Typography variant="h6" color="primary" align="center">
                    Contact
                </Typography>
            </ListSubheader>
            <ListItem>
                <ListItemIcon>
                    <EmailIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>test@gmail.com</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <FacebookIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>thisaisannie</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <TwitterIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>@glacii12s</ListItemText>
            </ListItem>
        </List>
    );
}

function FriendsList() {
    return (
        <List>
            <ListSubheader disableSticky>
                <Typography variant="h6" align="center" color="primary">
                    Friends
                </Typography>
            </ListSubheader>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>LS</Avatar>
                </ListItemAvatar>
                <ListItemText>Tony Lee Sin</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>CP</Avatar>
                </ListItemAvatar>
                <ListItemText>Cario Pong</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>YS</Avatar>
                </ListItemAvatar>
                <ListItemText>Yeung Sin He</ListItemText>
            </ListItem>
        </List>
    );
}

function LicenseInfo() {
    return (
        <List>
            <ListSubheader disableSticky>
                <Typography variant="h6" align="center" color="primary">
                    License
                </Typography>
            </ListSubheader>
            <ListItem>
                <ListItemIcon>
                    <CreativeCommons fontSize="large" />
                </ListItemIcon>
                <ListItemText>CC-BY 4.0</ListItemText>
            </ListItem>
        </List>
    );
}
