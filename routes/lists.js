const express = require("express");

const router = express.Router();

const listController = require("../controller/list_controller");

router.get("/", listController.home);

router.post("/create-list", listController.createList);

router.get("/delete-list/", listController.deleteList);

module.exports = router;
