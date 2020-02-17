import React, { useState, useEffect } from 'react';
import Axios from '../../utils/Axios';
import Posts from './Posts';
import ErrorCard from '../ErrorCard';
import PostsLoading from './PostsLoading';
import { Box } from '@material-ui/core';
import PageIndex from '../PageIndex';
import { useSearchParam } from 'react-use';

export default function GetPosts() {
    const search = useSearchParam('search') || undefined;
    const page = useSearchParam('p') || 1;
    const pageSize = useSearchParam('ps') || 6;
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [maxPage, setMaxPage] = useState(0);
    const [err, setErr] = useState(false);
    useEffect(() => {
        let source = Axios.CancelToken.source();
        (async () => {
            setLoading(true);
            try {
                const resp = (
                    await Axios.get(`/posts`, {
                        params: {
                            keyword: search,
                            page,
                            pageSize,
                        },
                        cancelToken: source.token,
                    })
                ).data;
                if (!resp.err) {
                    const ps = resp.data.posts.map(e => {
                        e.cDate = new Date(e.cDate);
                        return e;
                    });
                    setPosts(ps);
                    setMaxPage(resp.data.maxPage);
                    setErr(false);
                } else if (resp.err.includes('no posts found')) {
                    setPosts([]);
                } else {
                    setErr(true);
                }
            } catch (e) {
                if (!Axios.isCancel(e)) {
                    setErr(true);
                    console.error(e);
                }
            } finally {
                setLoading(false);
            }
        })();
        return () => {
            source.cancel('axios fetch canelled');
        };
    }, [page, pageSize, search]);
    if (loading) {
        return <PostsLoading num={pageSize} />;
    }
    if (err) {
        return <ErrorCard subject={'Posts'} />;
    }
    return (
        <>
            <Posts posts={posts} />
            {maxPage > 1 ? (
                <Box mt={2}>
                    <PageIndex maxPage={maxPage} page={parseInt(page)} />
                </Box>
            ) : null}
        </>
    );
}
