const { application } = require("express");
const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

//Use express router
app.use("/", require("./routes"));

app.use(express.static("assests"));

app.set("view engine", "ejs");

app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

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
  return res.render({
    todolist: list,
    title: "ToDoList",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is successfully running on port: ${port}`);
});
