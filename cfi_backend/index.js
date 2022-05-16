const express = require("express");

const mongoose = require("mongoose");
const { errorHandler } = require("./Middleware/errMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const color = require("colors");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
connectDB();
const app = express();
app.use(cors());

const port = process.env.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/criminal", require("./Routes/criminalRoutes"));
app.use("/users", require("./Routes/userRoutes.js"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`MongoDB database connected successfully at:  ${port}`);
});
