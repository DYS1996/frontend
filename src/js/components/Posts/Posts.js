import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    Grid,
    Box,
    CardContent,
    CardHeader,
    CardActions,
    Typography,
    Button,
    ButtonGroup,
    CardMedia,
    Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RRLink } from 'react-router-dom';
import UnCon from './UnCon.svg';
import { useWindowSize } from 'react-use';

const useAlignTags = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(1.5),
    },
}));

export default function Posts(props) {
    const alignTags = useAlignTags();
    const { width } = useWindowSize();
    const { posts, ...rest } = props;

    if (posts.length === 0) {
        return <NoPosts width={width} />;
    }
    return posts.map((e, i) => (
        <Box my={2} key={i}>
            <Card>
                <CardHeader
                    title={
                        <Link
                            component={RRLink}
                            to={{ pathname: '/post', search: `?id=${e.pid}` }}
                        >
                            {e.title}
                        </Link>
                    }
                    subheader={
                        'Created: ' +
                        e.cDate.toLocaleDateString() +
                        (e.mDate
                            ? ' Updated: ' + e.mDate.toLocaleDateString()
                            : '')
                    }
                />
                <CardContent>
                    <Typography paragraph>{e.content}</Typography>
                </CardContent>
                <CardActions classes={alignTags}>
                    <ButtonGroup size="small" variant="text" color="primary">
                        {e.tags.map((e, i) => (
                            <Button href="#" key={i}>
                                {e}
                            </Button>
                        ))}
                    </ButtonGroup>
                </CardActions>
            </Card>
        </Box>
    ));
}

function NoPosts(props) {
    const { width } = props;
    return (
        <Box pb={2}>
            <Card>
                <CardHeader
                    title="sorry, no posts published"
                    titleTypographyProps={{ align: 'center' }}
                    subheader="maybe comeback later"
                    subheaderTypographyProps={{ align: 'center' }}
                />
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <CardMedia
                            style={{
                                width: '100%',
                            }}
                            image={UnCon}
                        />
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            cDate: PropTypes.instanceOf(Date).isRequired,
            mDate: PropTypes.instanceOf(Date),
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};
