var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res); // Push the readstream => writestream allows to write data in chunks
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
