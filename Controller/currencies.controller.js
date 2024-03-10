const currencies = require('../currencies.json');

const getCurrencyList = (req, res) => {
    res.json(currencies);
}


// exporting the module
module.exports = getCurrencyList;