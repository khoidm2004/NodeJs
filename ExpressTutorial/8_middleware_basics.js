/**
 Middleware is a function sits between incoming request and outgoing response
 in a web application. It processes the req modifies them if needed, and
 decide pass to the next middleware or terminate the process

 Applications: logging, CORS, authenication

 Middleware have access to 
 - req: contains data about HTTP request
 - res: response object
 - next: a callback function to pass control to the next middleware

 Note: The order of middleware in the chain is matter
 */ 

const express = require("express");
const app = express();

const logger = (req, res, next) => {
  // Remember to pass next() or res something to terminate the cycle
  const method = req.method;
  const url = req.url;
  const time = new Date().getTime();
  console.log(method, url, time);
  next();
};

// req => middleware => res
app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000 ...");
});
