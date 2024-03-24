const blogPages = require("../Controller/blogs.controller");
const router = require("express").Router();

router.get("/", blogPages.blogHomepage);
// router.get("/login", blogPages.loginUser);

// CRUD operation on the router
router.post("/new", blogPages.createNewBlog); // create a new blog
router.get("/all", blogPages.getAllBlogs); // read all blogs
router.patch("/:id", blogPages.updateBlogWithID); // update a blog; PATCH => partial updates, PUT => updates the entire resource
router.delete("/:id", blogPages.deleteBlog); // delete a blog

module.exports = router;
