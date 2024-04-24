import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});

app.post("/register", (req, res) => {
  // do something with the data
  res.sendStatus(201);
});

app.put("/user/sahoo", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/sahoo", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/sahoo", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started at the port ${port}`);
});
