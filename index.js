require("dotenv").config();
const router = express.Router();
const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
//=======>contect to data base <=========
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
//==========>Listen server<========
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

// =======>Rout<============
module.exports = router;
