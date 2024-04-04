const Blogs = require("../Models/blogs.model");
const {
  findAllBlogs,
  createBlogDocument,
} = require("../Services/blogs.services");

const blogHomepage = (req, res) => {
  res.status(200).json({ message: "Success", note: "Coming from controller" });
  // res.send("<h1>Blogs Homepage</h1>").end();
};

//  🚩 CRUD operation 👉
// CREATE: creating a new post and saving to DB
const createNewBlog = async (req, res) => {
  console.log(req.body);
  //   const newBlogDoc = new Blogs({ title: "My First blog" }); // default doc
  // const newBlogDoc = new Blogs({ ...req.body }); // through POST
  // const result = await newBlogDoc.save(); // saving to DB
  const result = await createBlogDocument({ ...req.body });
  console.log(result);
  res.json(result);
  //   res.status(200).json({ message: "Create a new blog" });
  //   res.sendStatus(200);
};

// READ: get all docs from the DB and sending to client
const getAllBlogs = async (req, res) => {
  console.log("Current path /blogs/all");
  try {
    // const blogs = await Blogs.find({}); // 👈 moved to blogs.service.js
    const blogs = await findAllBlogs();
    res.json(blogs);
  } catch (e) {
    console.log("Failed to save document", e);
    res.status(404).json({ message: "Could not fetch DB", error: `${e}` });
  }
};

// UPDATE: updating the doc
const updateBlogWithID = async (req, res) => {
  const { id } = req.params;
  console.log(`Updating the blog with id: ${id}`);
  try {
    const update = req.body;
    const result = await Blogs.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });
    console.log(`Blog with id: ${id} has been updated successfully`);
    res.json(result);
  } catch (e) {
    res.status(500).json({ message: "Could not save the blog", error: `${e}` });
  }
};

// DELETE: deleting the blog through network call using id
const deleteBlog = async (req, res) => {
  const id = req.params.id;
  console.log(`Deleting the blog with id: ${id}`);
  try {
    console.log(`Blog with id: ${id} has been deleted successfully`);
    const result = await Blogs.findOneAndDelete({ _id: id });
    res.json(result);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Could not delete the blog", error: `${e}` });
  }
};

// search blog by query
const searchBlog = async (req, res) => {
  const { title, author } = req.query;
  console.log(
    `Searching for blog with the query: '${title}' and author: '${author}'`
  );
  try {
    const result = await Blogs.find({
      $or: [
        // { title }, // search only by title
        { title: { $regex: new RegExp(title), $options: "gi" } }, // search by text that part of the title
        { authors: { $elemMatch: { email: author } } }, // search by email only
      ],
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch the blog" });
  }
};

const loginUser = (req, res) => {
  res.send("<h2>This is login page</h2>").end();
};

module.exports = {
  createNewBlog,
  getAllBlogs,
  updateBlogWithID,
  blogHomepage,
  deleteBlog,
  searchBlog,
  loginUser,
};
