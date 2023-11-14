const mongoose = require("mongoose");

const { URI, DBNAME } = require("./constant");

module.exports = async function () {
  try {
    await mongoose.connect(URI, {
      dbName: DBNAME,
    });
    console.log("connect to mongodb successfully!");
  } catch (err) {
    console.log("something wrong when connecting to mongodb server!");
    throw err;
  }
};
