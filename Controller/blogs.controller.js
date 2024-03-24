const Blogs = require("../Models/blogs.model");

// creating a new post and saving to DB
const createNewBlog = async (req, res) => {
  console.log(req.body);
  //   const newBlogDoc = new Blogs({ title: "My First blog" }); // default doc
  const newBlogDoc = new Blogs({ ...req.body }); // through POST
  const result = await newBlogDoc.save(); // saving to DB
  console.log(result);
  res.json(result);
  //   res.status(200).json({ message: "Create a new blog" });
  //   res.sendStatus(200);
};

// get all docs from the DB and sending to client
const getAllBlogs = async (req, res) => {
  console.log("Current path /blogs/all");
  try {
    const blogs = await Blogs.find({});
    res.json(blogs);
  } catch (e) {
    console.log("Failed to save document", e);
    res.status(404).json({ message: "Could not fetch DB", error: `${e}` });
  }
};

const blogHomepage = (req, res) => {
  res.status(200).json({ message: "Success", note: "Coming from controller" });
  // res.send("<h1>Blogs Homepage</h1>").end();
};

const loginUser = (req, res) => {
  res.send("<h2>This is login page</h2>").end();
};

module.exports = { createNewBlog, getAllBlogs, blogHomepage, loginUser };
