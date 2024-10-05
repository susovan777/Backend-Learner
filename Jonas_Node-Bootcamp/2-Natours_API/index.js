import express from "express";
import { readFileSync, writeFile } from "node:fs";
const app = express();

app.use(express.json()); // middleware

/* app.get("/", (req, res) => {
  //   res.send("Hello world!");
  res.status(200).json({ message: "Hello from the server", app: "Natours" });
}); */

const tours = JSON.parse(readFileSync("./data/tours-simple.json"));
// GET request
app.get("/api/v1/tours", (req, res) => {
  res
    .status(200)
    .json({ status: "success", result: tours.length, data: { tours } });
});

// Handling URL paramaeters
app.get("/api/v1/tours/:id/:x/:y", (req, res) => {
  console.log(req.params);
  
  res.status(200).json({ status: "Success" });
});

// POST request
app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  writeFile("./data/tours-simple.json", JSON.stringify(tours), (error) => {
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  });
});

app.listen(3000, () => {
  console.log("Listening to the server at port 3000...");
});
