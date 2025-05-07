require('dotenv').config();
const app = require("./app");
const connectDB = require("./config/config");

connectDB().then(() => {
  console.log("DB connected successfully");
  app.listen(`${process.env.SERVER_PORT}`, () =>
    console.log(`Server running on ${process.env.SERVER_PORT}`)
  );
}).catch((error)=>console.log(error))
