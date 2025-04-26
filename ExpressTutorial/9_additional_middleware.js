const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// req => middleware => res
// app.use([logger, authorize]); This will invoke any route, the order is matter to decide which route use middleware

// app.use('/path', logger) This will apply middleware for any path which matches the provided path

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000 ...");
});
