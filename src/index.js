import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
// import proxy from 'express-http-proxy';
const app = express();
const proxy = require('express-http-proxy');

app.use(express.static('public'));

const apiPath = 'https://dev-gateway-v2.youbtrip.com/gql';
app.use('/gql', (req, res, next) => {
    if (req.headers.origin === 'http://www.youbtrip.com' || req.headers.origin === 'https://www.youbtrip.com') {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    proxy('https://dev-gateway-v2.youbtrip.com/gql' + '/wx', {
        proxyReqPathResolver: req => apiPath + '/wx'
    })(req, res, next);
});

app.get('*', async (req, res) => {
    res.status(200);
    const result = await renderer(req);
    res.send(result);
    res.end();
});


app.listen(3002);