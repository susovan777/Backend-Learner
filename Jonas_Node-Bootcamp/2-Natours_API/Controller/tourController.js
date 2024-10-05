import { readFileSync, writeFile } from "node:fs";

const tours = JSON.parse(readFileSync("./data/tours-simple.json"));

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    result: tours.length,
    data: { tours },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1; // req.params is a string, coverted to number
  const tour = tours.find((el) => el.id === id);

  // id > tours.length then tour will undefined
  if (!tour)
    res.status(404).json({ status: "Not found!", message: "Invalid ID" });
  res.status(200).json({ status: "Success", data: tour });
};

const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length)
    res.status(404).json({ status: "Not found!", message: "Invalid ID" });
  res.status(200).json({
    status: "Success",
    message: "Tour updated",
    data: {
      tour: "Tour update here",
    },
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length)
    res.status(404).json({ status: "Not found!", message: "Invalid ID" });
  res.status(204).json({
    status: "Success",
    message: "No content",
    data: null,
  });
};

export { getAllTours, getTour, createTour, updateTour, deleteTour };
