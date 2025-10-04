import express from "express";
import fs, { writeFile } from "fs";


const app = express();
const port = 3000;

app.use(express.json()); // This middleware parses JSON data from the request body

const tours = JSON.parse(
  fs.readFileSync(`./data/tours-simple.json`) // in case of CJS we could use __dirname instead of .
);

app.get("/", (req, res) => {
  // res.status(200).send("Hello from the server!")
  res.status(200).json({ message: "Hello from the server!", app: "natours" });
});

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  // console.log("We can post to this endpoint!"); // this will print to the console
  // res.send("We can post to this endpoint!"); // this will print in the server

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(`./data/tours-simple.json`, JSON.stringify(newTour), (err) =>
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    })
  );
});

app.listen(port, () => {
  console.log("Listening to the server at", port);
});
