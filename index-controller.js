const express = require('express');
const getCurrencyList = require('./Controller/currencies.controller');

const port = 8081;
const app = express();

app.get('/', (req, res) => {
    res.write('<h1>Currency Database</h1>');
    res.end();
})

app.get('/currencies', getCurrencyList);

app.listen(port, () => {
    console.log("Server started at the port", port);
})