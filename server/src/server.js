require('dotenv').config();
const app = require("./app");
const connectDB = require("./config/db")

// for vercel deployment, It doesn't take app.listen()
module.exports = app;

connectDB().then(() => {
  console.log("DB connected successfully");
}).catch((error)=>console.log(error))
