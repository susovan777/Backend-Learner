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
app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1; // req.params is a string, coverted to number
  const tour = tours.find((el) => el.id === id);

  // id > tours.length then tour will undefined
  if (!tour)
    res.status(404).json({ status: "Not found!", message: "Invalid ID" });
  res.status(200).json({ status: "Success", data: tour });
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

// PATCH request
app.patch("/api/v1/tours/:id", (req, res) => {
  if (req.params.id * 1 > tours.length)
    res.status(404).json({ status: "Not found!", message: "Invalid ID" });
  res.status(200).json({
    status: "Success",
    message: "Tour updated",
    data: {
      tour: "Tour update here",
    },
  });
});

// DELETE request
app.delete("/api/v1/tours/:id", (req, res) => {
  if (req.params.id * 1 > tours.length)
    res.status(404).json({ status: "Not found!", message: "Invalid ID" });
  res.status(204).json({
    status: "Success",
    message: "No content",
    data: null,
  });
});

app.listen(3000, () => {
  console.log("Listening to the server at port 3000...");
});
