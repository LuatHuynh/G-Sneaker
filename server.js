const express = require("express");
require("dotenv").config();

const { PORT } = require("./src/config/constant");

const app = express();
const bodyParser = require("body-parser");
const router = require("./src/router/index");
const errorHandlingMDW = require("./src/middleware/error-handling");
const connectDB = require("./src/config/db-connect");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to mongodb
connectDB();

//routing
router(app);

//handle error
app.use(errorHandlingMDW.handleErrorResquest);

const port = PORT || 5000;

app
  .listen(port, () => {
    console.log(`server was running on port ${port}`);
  })
  .on("error", () => {
    console.log("something wrong with while setting up your server");
  });
