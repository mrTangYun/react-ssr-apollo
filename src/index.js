import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
const app = express();

app.use(express.static('public'));

app.get('*', async (req, res) => {
    res.status(200);
    const result = await renderer(req);
    res.send(result);
    res.end();
});


app.listen(3002);