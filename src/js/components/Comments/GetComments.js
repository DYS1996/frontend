import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import CommentsLoading from './CommentsLoading';
import ErrorCard from '../ErrorCard';
import Axios from '../../utils/Axios';
import { Box, Grid, Container } from '@material-ui/core';
import PageIndex from '../PageIndex';
import { useSearchParam } from 'react-use';

export default function GetComments() {
    const pid = useSearchParam('id') || 1;
    const page = useSearchParam('p') || 1;
    const pageSize = useSearchParam('ps') || 6;

    const [cmts, setCmts] = useState(null);
    const [loading, setLoading] = useState(true);

    const [err, setErr] = useState(false);
    const [maxPage, setMaxPage] = useState(0);
    useEffect(() => {
        let source = Axios.CancelToken.source();
        (async () => {
            setLoading(true);
            try {
                const resp = (
                    await Axios.get(`/comments`, {
                        params: { pid, page, pageSize },
                        cancelToken: source.token,
                    })
                ).data;
                if (!resp.err) {
                    const cs = resp.data.Comments.map(e => {
                        e.CDate = new Date(e.cDate);
                        return e;
                    });
                    setCmts(cs);
                    setMaxPage(resp.data.maxPage);
                } else if (resp.err.includes('no comments found')) {
                    setCmts([]);
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
            source.cancel('axios fetch cancelled');
        };
    }, [pid, page, pageSize]);
    if (loading) {
        return <CommentsLoading />;
    }
    if (err) {
        return <ErrorCard msg="errors when fetching comments" />;
    }
    return (
        <>
            <Comments cmts={cmts} maxPage={maxPage} />
            {maxPage > 1 ? (
                <Box mt={2}>
                    <PageIndex
                        maxPage={maxPage}
                        page={parseInt(page)}
                        onChange={() => {
                            setLoading(true);
                        }}
                    />
                </Box>
            ) : null}
        </>
    );
}
