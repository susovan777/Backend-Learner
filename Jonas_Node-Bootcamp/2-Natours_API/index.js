import express from "express";
import { readFileSync, writeFile } from "node:fs";
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
const tours = JSON.parse(readFileSync("./data/tours-simple.json"));

// 🙂 Refactoring Codes
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

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined",
  });
};

// 🔸 3) Routes
// app.get("/api/v1/tours", getAllTours);
// app.get("/api/v1/tours/:id", getTour);
// app.post("/api/v1/tours", createTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

app.route("/api/v1/tours").get(getAllTours).post(createTour);
app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route("/api/v1/users").get(getAllUsers).post(createUser);
app
  .route("/api/v1/users/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

// 🔸 4) Server
app.listen(3000, () => {
  console.log("Listening to the server at port 3000...");
});
