const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  authors: [String],
  content: String,
  publishedAt: Date,
});

const blogModel = mongoose.model("Blogs", blogSchema, "MyBlogs");

model.exports = blogModel;
