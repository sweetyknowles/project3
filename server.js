require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI);

// Logging info about database
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose connected successfully");
});
connection.on("error", err => {
  console.log("Mongoose Error: ", err);
});

// apply middleware

app.use(logger("dev"));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//bringing in the react client side.
app.use(express.static(`${__dirname}/client/build`));

// set up routes
const userController = require("./controllers/userController");
app.use("/api/user", userController);

const projectsController = require("./controllers/projectsController");
app.use("/api/user/:userid/project", projectsController);

//below you api routes
app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

// Exposes the Static Javascript HTML and CSS we need to run the app

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Application is listening on Port" + PORT);
});
