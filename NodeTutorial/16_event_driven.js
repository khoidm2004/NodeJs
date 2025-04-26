// Events Emitter
const EventEmitter = require("events");

// The order of the event is matter many event can emit same stuff

const customEmitter = new EventEmitter(); // Create instance if you want to create new events  

// on - listen an event
customEmitter.on("response", (name, id) => { 
  // Register "response" event + action console log data received
  console.log(`data received: ${name} ${id}`);
});

customEmitter.on("response", () => {
  // Register multiple listeners for a event will added them to a list of listener for that event
  console.log("some logic here");
});

// emit - emit that event
customEmitter.emit("response", "John", 34); // Emit the response event

// Event Emitter - http modules

const http = require("http");

const server = http.createServer(); // http.createServer return instance of http.Server = event emitter

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
