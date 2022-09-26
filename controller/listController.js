module.exports.list = function (req, res) {
  return res.render("list", {
    title: "TODO App",
  });
};
