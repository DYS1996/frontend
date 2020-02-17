import React from 'react';
import ReactDom from 'react-dom';
import App from './js/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

ReactDom.render(
    <Router>
        <CssBaseline />
        <App />
    </Router>,
    document.getElementById('app')
);
