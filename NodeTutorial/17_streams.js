// Stream extends EventEmitter Class

// Streams are an integral part of NodeJs designed to handle large amount of data
// Type

// Readstream
const { writeFileSync, createReadStream } = require("fs");

for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big.txt", `hello ${i}\n`, { flag: "a" });
}

// highWaterMark is a setting used in stream to control amount of data that can be buffered 
// before pausing read or write operations
// const stream = createReadStream("./content/big.txt", {highWaterMark: 90000});

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
}); // Read small chunk of data and process them incrementally

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
