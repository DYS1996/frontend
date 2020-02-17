import React from 'react';
import {
    Card,
    Button,
    CardHeader,
    CardActions,
    ButtonGroup,
    Typography,
    CardContent,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useAlignTags = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(1.5),
    },
}));

export default function Post(props) {
    const { title, cDate, mDate, content, tags, ...rest } = props;
    const alignTags = useAlignTags();
    return (
        <Card raised>
            <CardHeader
                title={title}
                subheader={
                    'Created: ' +
                    cDate.toLocaleDateString() +
                    (mDate ? ' Updated: ' + mDate.toLocaleDateString() : '')
                }
            />
            <CardActions classes={alignTags}>
                <ButtonGroup variant="text" color="primary" size="small">
                    {tags.map((e, i) => (
                        <Button href="#" key={i}>
                            {e}
                        </Button>
                    ))}
                </ButtonGroup>
            </CardActions>
            <CardContent>
                {content.split(/\r?\n/).map((e, i) => (
                    <Typography paragraph key={i} variant="body1">
                        {e}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    cDate: PropTypes.instanceOf(Date).isRequired,
    mDate: PropTypes.instanceOf(Date),
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
