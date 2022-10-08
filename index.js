const express = require("express");
const port = 8000;
const db = require("./config/mongoose");
const app = express();
const List = require("./models/list");
const bodyParser = require("body-parser");

//Use express router

app.set("view engine", "ejs");

app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("assests"));

app.get("/", function (req, res) {
  List.find({}, (err, lists) => {
    if (err) {
      console.log("Error occured while finding the contacts in db");
      return;
    }
    return res.render("list", {
      todolist: lists,
      title: "ToDoList",
    });
  });
});

app.post("/create-list", function (req, res) {
  // list.push({
  //   id: req.body.id,
  //   description: req.body.description,
  //   date: req.body.date,
  //   category: req.body.category,
  // });

  List.create(
    {
      description: req.body.description,
      date: req.body.date,
      category: req.body.category,
    },
    (err, newList) => {
      if (err) {
        console.log("Error in creating a contact");
        return;
      }
      console.log("********", newList);
      return res.redirect("/");
    }
  );
});

app.get("/delete-list/", function (req, res) {
  let ids = req.query.id;
  // console.log(req.params);

  List.findByIdAndRemove({ _id: ids }, (err) => {
    if (err) {
      console.log("Error in deleting an object from db");
      return;
    }
    return res.redirect("/");
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is successfully running on port: ${port}`);
});
