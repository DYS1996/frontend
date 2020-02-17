import React from 'react';
import PropTypes from 'prop-types';
import {
    Paper,
    List,
    Box,
    ListSubheader,
    ListItem,
    Typography,
    ListItemText,
} from '@material-ui/core';

export default function Comments(props) {
    const { cmts, maxPage, ...rest } = props;

    return (
        <Paper variant="outlined" square>
            <List dense>
                <ListSubheader color="primary" disableSticky>
                    Comments
                </ListSubheader>
                {cmts.length === 0 ? (
                    <NoComment />
                ) : (
                    cmts.map((e, i) => (
                        <ListItem
                            key={i}
                            divider={i == cmts.length - 1 ? false : true}
                        >
                            <ListItemText
                                disableTypography
                                primary={e.Content.split(/\r?\n/).map(
                                    (c, i) => (
                                        <Typography
                                            paragraph
                                            variant="body2"
                                            key={i}
                                        >
                                            {c}
                                        </Typography>
                                    )
                                )}
                                secondary={
                                    <Typography
                                        variant="subtitle2"
                                        color="textSecondary"
                                    >
                                        {e.Email +
                                            ' on ' +
                                            e.CDate.toLocaleDateString()}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))
                )}
            </List>
        </Paper>
    );
}

function NoComment() {
    return (
        <Box mb={3}>
            <ListItem>
                <ListItemText
                    primary="Currently No Comments..."
                    primaryTypographyProps={{
                        variant: 'h6',
                    }}
                />
            </ListItem>
        </Box>
    );
}

Comments.propTypes = {
    cmts: PropTypes.arrayOf(
        PropTypes.shape({
            Email: PropTypes.string.isRequired,
            Content: PropTypes.string.isRequired,
            CDate: PropTypes.instanceOf(Date).isRequired,
        })
    ).isRequired,
    maxPage: PropTypes.number.isRequired,
};
