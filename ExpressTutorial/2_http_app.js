// Port is a communication endpoint
// Notable well-known port numbers
// 20: File Transfer Protocol (FTP) Data Transfer
// 21: File Transfer Protocol (FTP) Command Control
// 22: Secure Shell (SSH) Secure Logn
// 23: Telnet remote login service, unecrypted text messages
// 25: Simple Mail Transfer Protocol (SMTP) Email routing
// 53: Domain Name System (DNS) service
// 67,68: Dynamic Host Configuration Protocol (DHCP)
// 80: Hypertext Transfer Protocol used in WWW
// 110: Post Office Protocol (POP3)
// 119: Network News Transfer Protocol (NNTP)
// 123: Network Time Protocol (NTP)
// 143: Internet Message Access Protocol (IMAP) Management of digital mail
// 161: Simple Network Management Protocol (SNMP)
// 194: Internet Relay Chat (IRC)
// 443: HTTP Secure (HTTPS) HTTP over TLS/SSL
const http = require("http");
const { readFileSync } = require("fs");

// Get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  if (url === "/") {
    console.log(req.url);
    res.writeHead(200, { "content-type": "text/html" }); //MIME (Multipurpose Internet Main Extension) Types
    res.write(homePage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" }); //MIME (Multipurpose Internet Main Extension) Types
    res.write(homeStyles);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" }); //MIME (Multipurpose Internet Main Extension) Types
    res.write(homeImage);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" }); //MIME (Multipurpose Internet Main Extension) Types
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" }); //MIME (Multipurpose Internet Main Extension) Types
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5000);
