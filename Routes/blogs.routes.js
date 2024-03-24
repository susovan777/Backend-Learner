const blogPages = require('../Controller/blogs.controller');
const router = require('express').Router();


router.get("/", blogPages.blogHomepage);
router.get("/all", blogPages.getAllBlogs); // read all blogs
// router.get("/login", blogPages.loginUser);

router.post("/new", blogPages.createNewBlog); // create a new blog
router.delete("/:id", blogPages.deleteBlog); // delete a blog

module.exports = router;