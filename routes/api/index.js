const router = require("express").Router();
const axios = require("axios")
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;