const Blogs = require("../Models/blogs.model");

const createNewBlog = async (req, res) => {
  console.log(req.body);
  const newBlogDoc = new Blogs({ title: "My First blog" });
  const result = await newBlogDoc.save();
  console.log(result);

  res.status(200).json({ message: "Create a new blog" });
  //   res.sendStatus(200);
};

const blogHomepage = (req, res) => {
  res.status(200).json({ message: "Success", note: "Coming from controller" });
  // res.send("<h1>Blogs Homepage</h1>").end();
};

const loginUser = (req, res) => {
  res.send("<h2>This is login page</h2>").end();
};

module.exports = { createNewBlog, blogHomepage, loginUser };
