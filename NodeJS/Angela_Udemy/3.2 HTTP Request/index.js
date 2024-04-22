import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(req.rawHeaders); // to see where the request originated
//   console.log("Hello from Express app!");
});

app.listen(port, () => {
  console.log(`Server started at the port ${port}`);
});
