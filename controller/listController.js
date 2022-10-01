const Contact = require("../../contact_list/models/contact");

module.exports.title = function (req, res) {
  return res.render("list", {
    title: "TODO App",
  });
};

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

module.exports.list = function (req, res) {
  list.push({});
};
