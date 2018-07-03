import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});


ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </ApolloProvider>,
    document.querySelector('#root'),
);