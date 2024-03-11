const express = require('express');
const currencies = require('./Controller/currencies.controller');
const { getAllUsers, getUserByUuid, searchUsersByQuery } = require('./Controller/users.controller');

const port = 8081;
const app = express();

// default page
app.get('/', (req, res) => {
    res.write('<h1>Currency Database</h1>');
    res.end();
})

// currencies page
app.get('/currencies', currencies.getCurrencyList);

// currency with symbol
app.get('/currencies/:symbol', currencies.getCurrencyWithSymbol)

// user datas
app.get('/users', getAllUsers);

// search user by query
app.get('/users/search', searchUsersByQuery);

// user data by UUID
app.get('/users/:uuid', getUserByUuid);

app.listen(port, () => {
    console.log("Server started at the port", port);
})