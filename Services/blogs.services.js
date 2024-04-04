const Blogs = require("../Models/blogs.model");

const findAllBlogs = async () => {
  const allBlogs = await Blogs.find({});
  return allBlogs;
};

const createBlogDocument = async (body) => {
  const newBlogDoc = new Blogs({ ...body });
  const savedDoc = await newBlogDoc.save();
  return savedDoc;
};

module.exports = { findAllBlogs, createBlogDocument };
