const express = require("express");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

//Body parser to convert the form data
app.use(express.urlencoded());

//To use the local files like Images, CSS, JavaScript
app.use(express.static("assests"));

//EJS Path
app.set("view engine", "ejs");

app.set("views", "./views");

app.use("/", require("./routes"));

//Listening for server request
app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Server is successfully running on port: ${port}`);
});
