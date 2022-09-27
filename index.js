const express = require("express");

const app = express();

const port = 8000;

//Use express router
app.use("/", require("./routes"));

app.use(express.static("assests"));

app.set("view engine", "ejs");

app.set("views", "./views");

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is successfully running on port: ${port}`);
});
