const express = require("express");
const currencies = require("./currencies.json");
const port = 8082;

const app = express();
app.get("/", (req, res) => {
  console.log("Cuurent root: /");
  res.write("<h1>Currency Database</h1>");
  res.end();
});

// extending the API
app.get("/currency", (req, res) => {
  console.log("Cuurent root: /currency");

  const queryParam = req.query;
  if (queryParam.minSize) {
    const minSize = Number(queryParam.minSize);

    const result = currencies.data.filter(
      (item) => Number(item.min_size) >= minSize
    );
    res.json(result);
  } else {
    res.json(currencies.data);
  }
  //   res.json(currencies);
  //   res.end();
});

// using request.param
app.get("/currency/:symbol", (req, res) => {
  console.log("Cuurent root: /currency/symbol");
  console.log(req.param);

  const match = currencies.data.find(
    (item) =>
      item.id.toLocaleLowerCase() === req.params.symbol.toLocaleLowerCase()
  );

  if (match) {
    res.json(match);
  } else {
    res.status(404).json({ message: "Inavlid symbol" });
  }
});

app.listen(port, () => {
  console.log("Server started at the port", port);
});
