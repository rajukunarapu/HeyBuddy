require('dotenv').config();
const app = require("./app");
const connectDB = require("./config/db")

module.exports = app;

connectDB().then(() => {
  console.log("DB connected successfully");
}).catch((error)=>console.log(error))
