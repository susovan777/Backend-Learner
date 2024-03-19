const blogHomepage = (req, res) => {
    // res.status(200).json({ message: "Success", note: "Coming from controller" });
    res.send("<h1>Blogs Homepage</h1>").end();
}

const loginUser = (req, res) => {
    res.send("<h2>This is login page</h2>").end();
}

module.exports = {blogHomepage, loginUser};