const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

//Use express router

app.set("view engine", "ejs");

app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("assests"));

const list = [
  {
    description: "Why not add a task?",
    date: "13/02/2022",
    category: "Work",
  },
  {
    description: "BreakFast",
    date: "29/06/2022",
    category: "Personal",
  },
];

app.get("/", function (req, res) {
  return res.render("list", {
    todolist: list,
    title: "ToDoList",
  });
});

app.post("/create-list", function (req, res) {
  list.push({
    description: req.body.description,
    date: req.body.date,
    category: req.body.category,
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is successfully running on port: ${port}`);
});
