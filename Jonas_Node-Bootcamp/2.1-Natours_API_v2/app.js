import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.status(200).send("Hello from the server!")
  res.status(200).json({ message: "Hello from the server!", app: "natours" });
});

app.post("/", (req, res) => {
    console.log("We can post to this endpoint!"); // this will print to the console
    res.send("We can post to this endpoint!") // this will print in the server
})

app.listen(port, () => {
  console.log("Listening to the server at", port);
});
