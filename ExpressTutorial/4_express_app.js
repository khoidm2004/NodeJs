const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public")); // Express automatically serves all files in the .public dir as static assets => can be accessed /file-name

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html")); // Use for specific files that are not part of static assets (HTML files)
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found</h1>");
});
app.listen(5000, () => {
  console.log("Sever is listening on port 5000");
});
