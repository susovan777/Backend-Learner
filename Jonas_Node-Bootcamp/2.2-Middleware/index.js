import express from "express";

const app = express();

const port = 3001;

// custom middleware
const loggedMiddleware = (req, res, next) => {
  console.log(`Logged url ${req.url}, ${req.method} -- ${new Date()}`);
};

// app.use(loggedMiddleware);

// user route
/* app.get("/user", (req, res) => {
  res.json({
    status: "success",
  });

  res.end("Hello from server");
}); */

// this execute every time app recieve a request
app.use((req, res, next) => {
  console.log(`Time: ${Date.now()}`);
  next();
});

// this mounted to '/user/:id', executes for any HTTP request on '/user/:id'
app.use("/user/:id", (req, res, next) => {
  console.log(`Request type ${req.method}`);
  next();
});

// handles GET request to the path '/user/:id'
app.get("/user/:id", (req, res, next) => {
  res.send("USER");
});


// static file
// try the path in browser: http://localhost:3001/static/img/nodejs.png
app.use('/static/img', express.static('public'))












app.listen(port, () => {
  console.log("Server listing at", port);
});
