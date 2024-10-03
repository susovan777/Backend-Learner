import express from "express";
import { readFileSync } from "node:fs";
const app = express();

/* app.get("/", (req, res) => {
  //   res.send("Hello world!");
  res.status(200).json({ message: "Hello from the server", app: "Natours" });
}); */

const tours = JSON.parse(readFileSync("./data/tours.json"));
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({ status: "success", result: tours.length, data: { tours } });
});

app.listen(3000, () => {
  console.log("Listening to the server at port 3000...");
});
