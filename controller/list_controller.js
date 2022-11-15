const List = require("../models/list");

//Home Page Controller
module.exports.home = function (req, res) {
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
};

//Controller to create List Items
module.exports.createList = function (req, res) {
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
};

//Controller to Delete item from List
module.exports.deleteList = function (req, res) {
  let ids = req.query.id;
  // console.log(req.params);

  List.findByIdAndRemove({ _id: ids }, (err) => {
    if (err) {
      console.log("Error in deleting an object from db");
      return;
    }
    return res.redirect("/");
  });
};
