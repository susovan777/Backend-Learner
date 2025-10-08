import express from "express";
import { userRouter } from "./routes/userRoutes.js";
import { tourRouter } from "./routes/tourRoutes.js";

const app = express();

// MIDDLEWARES

app.use(express.json()); // This middleware parses JSON data from the request body

// GET request
app.get("/", (req, res) => {
  // res.status(200).send("Hello from the server!")
  res.status(200).json({ message: "Hello from the server!", app: "natours" });
});

// ROUTES
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

/* 
// GET all tours
app.get("/", getAllTours);

// GET tour by Id
app.get("/api/v1/tours/:id", getTour);

// POST request
app.post("/api/v1/tours", createTour);

// PATCH request
app.patch("/api/v1/tours/:id", updateTour);

// DELETE request
app.delete("/api/v1/tours/:id", deleteTour);

 */

export { app };
