const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/list_db");

const db = mongoose.connection;

db.on()