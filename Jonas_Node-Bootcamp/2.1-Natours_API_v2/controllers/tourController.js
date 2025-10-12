// import fs from "fs";
import { Tour } from "../models/tourModel.js";

/* const tours = JSON.parse(
  fs.readFileSync(`./data/tours-simple.json`) // in case of CJS we could use __dirname instead of .
); */

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      result: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const getTour = async (req, res) => {
  try {
    // console.log(req.params.id);

    const tourById = await Tour.findOne({ _id: req.params.id }); // same as Tour.findOne({ _id: req.params.id })

    /* if (req.params.id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });
  } */

    res.status(200).json({
      status: "success",
      data: {
        tourById,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const createTour = async (req, res) => {
  // console.log("We can post to this endpoint!"); // this will print to the console
  // res.send("We can post to this endpoint!"); // this will print in the server

  /* const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  if (!tourId) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  fs.writeFile(`./data/tours-simple.json`, JSON.stringify(newTour), (err) =>
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    })
  ); */

  // --------------------------------------------------------------

  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    /* if (tourId > tours.length) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid Id",
    });
  } */

    res.status(201).json({
      status: "success",
      data: {
        // updated tour here
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    // const tourId = req.params.id * 1;

    /* if (tourId > tours.length) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid Id",
    });
  } */

    const tour = await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

export { getAllTours, getTour, createTour, updateTour, deleteTour };
