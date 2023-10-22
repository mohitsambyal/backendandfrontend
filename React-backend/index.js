const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/ToDoRoutes");
const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Mongo Db`))
  .catch((err) => console.log(`Error >`, err));
app.use(routes);
app.listen(PORT, function () {
  console.log("Server is Running ", PORT);
});
