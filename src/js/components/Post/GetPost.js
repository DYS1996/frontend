import React, { useEffect, useState } from 'react';
import Post from './Post';
import Axios from '../../utils/Axios';
import ErrorCard from '../ErrorCard';
import PostLoading from './PostLoading';
import { useSearchParam } from 'react-use';

export default function GetPost() {
    const pid = useSearchParam('id') || 1;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    useEffect(() => {
        let source = Axios.CancelToken.source();
        (async () => {
            setLoading(true);
            try {
                const resp = (
                    await Axios.get(`/post`, {
                        params: { id: pid },
                        cancelToken: source.token,
                    })
                ).data;
                if (!resp.err) {
                    const p = resp.data;
                    p.cDate = new Date(p.cDate);
                    setPost(p);
                    setErr(false);
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
    }, [pid]);
    if (loading) {
        return <PostLoading />;
    }
    if (err) {
        return <ErrorCard msg="errors when fetching post" />;
    }
    return <Post {...post} />;
}
