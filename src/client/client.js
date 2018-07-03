import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
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