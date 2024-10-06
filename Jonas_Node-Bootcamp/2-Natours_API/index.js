import express from "express";
const app = express();

// 🔸 1) Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log("Hello from middleware 👋");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 🔸 2) Route Handler
// ↩️ Moved to Controller folder and then imported the modules

import { tourRouter } from "./Router/tourRouter.js";
import { userRouter } from "./Router/userRouter.js";

// 🔸 3) Routes
// app.get("/api/v1/tours", getAllTours);
// app.get("/api/v1/tours/:id", getTour);
// app.post("/api/v1/tours", createTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

// ↩️ Moved to Router folder and used the routes

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);
app.use(express.static("./public"));

// 🔸 4) Server
// ↩️ Moved to Server.js file

export { app };
