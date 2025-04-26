const path = require("path");

// Path separators
console.log(path.sep); // Output: \ (on window)

//Concatenate path segment
const filePath = path.join("/content", "subfolder", "text.txt"); // Output:

console.log(filePath); // Output: \content\subfolder\text.txt

// Get the last part of directory
const base = path.basename(filePath); // Output: text.txt

console.log(base);

// Get file extension .extname('')
// Get directory name .dirname("path/to/dir")

// Get absolute path
const absoulute = path.resolve(__dirname, "content", "subfolder", "text.txt");

console.log(absoulute);
// Output: C:\Users\ADMIN\Project\NodeJs\NodeTutorial\content\subfolder\text.txt
