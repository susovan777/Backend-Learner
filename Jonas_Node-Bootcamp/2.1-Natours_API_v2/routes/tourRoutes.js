import express from "express";
import {
  getTour,
  getAllTours,
  createTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController.js";

const tourRouter = express.Router();

tourRouter.param('id', (req, res, next, val) => {
  console.log(`Tour id is ${val}`);
  next();
})

tourRouter.route("/").get(getAllTours).post(createTour);
tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

export { tourRouter };
