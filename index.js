const express = require("express");

const app = express();

const port = 8000;

app.listen(port, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Successfully setup the app and runnin on port: ${port}`);
});
