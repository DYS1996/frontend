import React from 'react';
import { Instagram } from 'react-content-loader';
import { Card, CardContent } from '@material-ui/core';

export default function PostLoading() {
    return (
        <Card>
            <CardContent>
                <Instagram foregroundColor={'#9f9f9f'} viewBox="0 0 400 330" />
            </CardContent>
        </Card>
    );
}
