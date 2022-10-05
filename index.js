const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const List = require("./models/list");
const bodyParser = require("body-parser");

//Use express router

app.set("view engine", "ejs");

app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("assests"));

const list = [];

app.get("/", function (req, res) {
  return res.render("list", {
    todolist: list,
    title: "ToDoList",
  });
});

app.post("/create-list", function (req, res) {
  list.push({
    id: req.body.id,
    description: req.body.description,
    date: req.body.date,
    category: req.body.category,
  });

  return res.redirect("/");
});

app.get("/delete-list", function (req, res) {
  return res.redirect("/");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is successfully running on port: ${port}`);
});
