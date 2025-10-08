import fs from "fs";

const tours = JSON.parse(
  fs.readFileSync(`./data/tours-simple.json`) // in case of CJS we could use __dirname instead of .
);

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

export { getAllTours, getTour, createTour, updateTour, deleteTour };
