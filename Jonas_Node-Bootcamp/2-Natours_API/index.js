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
// moved to a file for routes: tourRouter.js & userRouter.js and then imported the modules

import { tourRouter } from "./Router/tourRouter.js";
import { userRouter } from "./Router/userRouter.js";

// 🔸 3) Routes
// app.get("/api/v1/tours", getAllTours);
// app.get("/api/v1/tours/:id", getTour);
// app.post("/api/v1/tours", createTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// 🔸 4) Server
app.listen(3000, () => {
  console.log("Listening to the server at port 3000...");
});
