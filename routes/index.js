const express = require("express");

const router = express.Router();

const listController = require("../controller/listController");

router.get("/", listController.list);

module.exports = router;
