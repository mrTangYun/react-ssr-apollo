import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import config from '../config';

const client = new ApolloClient({
    uri: config.apiUri,
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </ApolloProvider>,
    document.querySelector('#root'),
);