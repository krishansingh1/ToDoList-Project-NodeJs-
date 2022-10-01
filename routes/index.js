const express = require("express");

const router = express.Router();

const listController = require("../controller/listController");

router.get("/", listController.title);

roouter.post("/create-list");

module.exports = router;
