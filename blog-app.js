const express = require("express");
const { blogHomepage, loginUser } = require("./Controller/blogs.controller");
const blogRouter = require("./Routes/blogs.routes");
const port = 3000;
const app = express();

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
