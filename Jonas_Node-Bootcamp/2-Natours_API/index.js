import express from "express";
const app = express();

app.get("/", (req, res) => {
  //   res.send("Hello world!");
  res.status(200).json({ message: "Hello from the server", app: "Natours" });
});

app.listen(3000, () => {
  console.log("Listening to the server at port 3000...");
});
