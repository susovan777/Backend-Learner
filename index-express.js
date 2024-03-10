const express = require('express');
const currencies = require('./currencies.json');
const port = 8082;

const app = express();
app.get('/', (req, res) => {
    console.log('Cuurent root: /');
    res.write('<h1>Currency Database</h1>');
    res.end();
});

app.get('/currency', (req, res) => {
    console.log('Cuurent root: /currency');
    res.json(currencies);
    res.end();
})

app.listen(port, () => {
    console.log("Server started at the port", port);
})