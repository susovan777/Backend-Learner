const mongoose = require("mongoose");
const validator = require("validator");

// defining schema for author: 👉 Intro to Nested Schema
const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxLength: 25 },
    twitterHandle: { type: String },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      validate: (value) => validator.isEmail(value), // returns boolean value
    },
    // adding valdattion to image
    image: {
      type: String,
      validate: (value) =>
        validator.isURL(value, {
          require_host: true,
          require_protocol: true,
        }),
    },
  },
  {
    _id: false, // while posting to db unneccessary id value was added
  }
);

// defining schema for blog
const blogSchema = new mongoose.Schema(
  {
    /* title: String,
  authors: [String],
  content: String,
  publishedAt: Date,
   */
    title: { type: String, unique: true, required: true },
    authors: [authorSchema],
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

// creating model
const blogModel = mongoose.model("Blogs", blogSchema, "MyBlogs");

// exporting model
module.exports = blogModel;
