import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json()); // This middleware parses JSON data from the request body

const tours = JSON.parse(
  fs.readFileSync(`./data/tours-simple.json`) // in case of CJS we could use __dirname instead of .
);

// Route handlers
const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params.id * 1);

  const tourId = req.params.id * 1;
  const tourById = tours.filter((el) => el.id === tourId);

  if (req.params.id > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tour: tourById,
    },
  });
};

const createTour = (req, res) => {
  // console.log("We can post to this endpoint!"); // this will print to the console
  // res.send("We can post to this endpoint!"); // this will print in the server

  const newId = tours[tours.length - 1].id + 1;
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
  );
};

const updateTour = (req, res) => {
  const tourId = req.params.id * 1;

  // logic to update the data ....

  if (tourId > tours.length) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  res.status(201).json({
    status: "success",
    data: {
      // updated tour here
    },
  });
};

const deleteTour = (req, res) => {
  const tourId = req.params.id * 1;

  // logic to delete the data ....

  if (tourId > tours.length) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid Id",
    });
  }

  res.status(201).json({
    status: "success",
    data: null, // as of now no data to delete
  });
};

// GET request
app.get("/", (req, res) => {
  // res.status(200).send("Hello from the server!")
  res.status(200).json({ message: "Hello from the server!", app: "natours" });
});

// GET all tours
app.get("/api/v1/tours", getAllTours);

// GET tour by Id
app.get("/api/v1/tours/:id", getTour);

// POST request
app.post("/api/v1/tours", createTour);

// PATCH request
app.patch("/api/v1/tours/:id", updateTour);

// DELETE request
app.delete("/api/v1/tours/:id", deleteTour);

app.listen(port, () => {
  console.log("Listening to the server at", port);
});
