const blogPages = require('../Controller/blogs.controller');
const router = require('express').Router();


router.get("/", blogPages.blogHomepage);
router.get("/new", blogPages.createNewBlog);
router.get("/all", blogPages.getAllBlogs);
// router.get("/login", blogPages.loginUser);

router.post("/new", blogPages.createNewBlog);

module.exports = router;