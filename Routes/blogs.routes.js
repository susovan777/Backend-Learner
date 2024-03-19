const blogPages = require('../Controller/blogs.controller');
const router = require('express').Router();


router.get("/", blogPages.blogHomepage);
router.get("/login", blogPages.loginUser);

module.exports = router;