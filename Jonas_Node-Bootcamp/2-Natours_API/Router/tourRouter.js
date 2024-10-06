import express from "express";
import {
  checkID,
  checkBody,
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} from "./../Controller/tourController.js";

const tourRouter = express.Router();

tourRouter.param("id", checkID);

tourRouter.route("/").get(getAllTours).post(checkBody, createTour);
tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

export { tourRouter }; // export method of ES6 module
