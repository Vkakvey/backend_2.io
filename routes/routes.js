const routes = require("./routes/routes");
const express = require("express");

const router = express.Router();

app.use("/api", routes);

module.exports = router;
