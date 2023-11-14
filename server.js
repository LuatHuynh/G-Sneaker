const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app
  .listen(port, () => {
    console.log(`server was running on port ${port}`);
  })
  .on("error", () => {
    console.log("something wrong with while setting up your server");
  });
