const mongoose = require("mongoose");

// defining schema
const blogSchema = new mongoose.Schema({
  /* title: String,
  authors: [String],
  content: String,
  publishedAt: Date,
   */
  title: { type: String, unique: true, required: true },
  authors: { type: [String] },
  content: { type: String, default: "" },
  publishedAt: { type: Date, default: null },
});

// creating model
const blogModel = mongoose.model("Blogs", blogSchema, "MyBlogs");

// exporting model
module.exports = blogModel;
