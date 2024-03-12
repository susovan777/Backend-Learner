// module form controller
const currencies = require('../Controller/currencies.controller');
const routes = require('express').Router();

// instead of app.get used router.get and changed '/currencies' to '/'
routes.get('/', currencies.getCurrencyList);
routes.get('/:symbol', currencies.getCurrencyWithSymbol)

// exporting router
module.exports = routes;