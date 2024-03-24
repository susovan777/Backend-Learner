const express = require("express");
const mongoose = require("mongoose");
const { blogHomepage, loginUser } = require("./Controller/blogs.controller");
const blogRouter = require("./Routes/blogs.routes");
const port = 3000;
const app = express();

const DB_URI = "mongodb://127.0.0.1:27017";
// to parse body object send we need middleware that comes with express
app.use(express.json());

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log(`Connected to MongoDB at ${DB_URI}`);
  })
  .catch((e) => {
    console.log("Failed to connect to MongoDB", e);
  });

// 👉 No controller or router
/* app.get("/", (req, res) => {
  // res.send("Hello World");
  res.status(200).json({ message: "Success" });
}); */

// 👉 using controller but no router
/* app.get("/blogs", blogHomepage);
app.get("/blogs/login", loginUser);
 */

// 👉 using router
app.use("/blogs", blogRouter);

app.listen(port, () => {
  console.log("Server started at the port", port);
});
