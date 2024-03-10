const currencies = require("../currencies.json");

const getCurrencyList = (req, res) => {
  console.log("Current Path: /currencies");
  res.json(currencies);
};

const getCurrencyWithSymbol = (req, res) => {
  console.log("Current Path: /symbol");
  const symbol = req.params.symbol;
  console.log(symbol);

  const result = currencies.data.find(
    (ele) => ele.id.toLocaleLowerCase() === symbol.toLocaleLowerCase()
  );
  console.log(result);

  if (result) {
    res.json(result);
  } else {
    res.json(currencies);
  }
};

// exporting the module
module.exports = { getCurrencyList, getCurrencyWithSymbol };
