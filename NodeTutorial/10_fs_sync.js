// Write and read file synchronously
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8"); // Read entire file
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// If the file doesnt exist it will create 1, otherwise it will overwrite the content by default
// {flag: a} append
writeFileSync("./content/result_sync.txt", `\nAppended content`, { flag: "a" });
