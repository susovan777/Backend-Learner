import { readFileSync, writeFile } from "node:fs";

const tours = JSON.parse(readFileSync("./data/tours-simple.json"));

// the below middleware check if ID is valid or not
const checkID = (req, res, next, id) => {
  console.log(`Tour id is: ${id}`);

  // id > tours.length then tour will undefined; req.params is a string, coverted to number by multiply 1
  if (req.params.id * 1 > tours.length) {
    return res
      .status(404)
      .json({ status: "Not found!", message: "Invalid ID" });
  }
  next();
};

// this middleware checks if the body has name or price property
const checkBody = (req, res, next) => {
  console.log(req.body);
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }
  next();
};

const getAllTours = (req, res) => {
  //   console.log(req.requestTime);
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    result: tours.length,
    data: { tours },
  });
};

const getTour = (req, res) => {
  //   console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({ status: "Success", data: tour });
};

const createTour = (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  //   adding newly created tour to the main data
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
  res.status(200).json({
    status: "Success",
    message: "Tour updated",
    data: {
      tour: "Tour update here",
    },
  });
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: "Success",
    message: "No content",
    data: null,
  });
};

export {
  checkID,
  checkBody,
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
};
