// The event loop is what allows NodeJs to perform non-blocking I/O operations by offloading 
// operations to the system kernel whenever possible

// When using callback or async operation, NodeJs will offload the async operation 
// to the event loop and continue executing the following lines of code

// => Once the async operations is complete - thread is free, the callback funtion is pushed 
// to the event loop to be excuted
// Example 1
const { readFile } = require("fs");

console.log("started first task");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed");
});

console.log("starting new task");

// Output:
// started first task
// starting new task
// Hello world
// completed

// Example 2
console.log("first ");
setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");

//Output:
//first
//third
//second
