const express = require("express");

const router = express.Router();

router.use("/", require("./lists"));

console.log("Router is loaded");

module.exports = router;
