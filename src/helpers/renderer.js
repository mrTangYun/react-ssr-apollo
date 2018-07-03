import React from 'react';
import fetch from 'node-fetch';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider, getDataFromTree } from "react-apollo";
import Routes from '../client/Routes';
import { createHttpLink } from 'apollo-link-http';

global.fetch = fetch;
export default async (req) => {
    const client = new ApolloClient({
        ssrMode: true,
        // 请注意，这是 SSR 服务器用于连接到 API 服务器的接口，因此我们需要确保它不被防火墙屏蔽
        uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
    });
    const App = (
        <ApolloProvider client={client}>
            <StaticRouter location={req.path} context={{}}>
                <Routes />
            </StaticRouter>
        </ApolloProvider>
    );
    // await new Promise((resolve, reject)=> {
    //
    // });
    await getDataFromTree(App);
    const content = renderToString(App);
    const initialState = client.extract();

    const html = <Html content={content} state={initialState} />;
    return renderToString(html);
};

function Html({ content, state }) {
    return (
        <html>
            <head></head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
                <script dangerouslySetInnerHTML={{
                    __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
                }} />
            </body>
        </html>
    );
}