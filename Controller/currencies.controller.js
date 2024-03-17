const currencies = require("../currencies.json");
// const PSW = "LetMeIn";
// require('dotenv').config();
// const Password = process.env.ROUTE_PASSWORD; //using environment variable

const getCurrencyList = (req, res) => {
  console.log("Current Path: /currencies");

  // // use the Headers in Postman to add key-value as Authorization-LetMeIn
  // const authorization = req.headers["authorization"];
  // console.log(authorization);
  // if (!authorization || authorization !== Password) {
  //   return res.status(403).json({ message: "Unauthorized request" });
  // }

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
