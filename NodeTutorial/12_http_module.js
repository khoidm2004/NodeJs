const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello");
  }
  if (req.url === "/about") {
    res.end("About");
  }
  res.end(
    `<h1>Oops<h1>
<p>Page not found</p>
<a href="/>Home</a>
`
  );
});

server.listen(5000);
