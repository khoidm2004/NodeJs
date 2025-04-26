// In commonJs, file is exported as module
// Require statement will execute the file immediately,
// it can execute whole file
const os = require("os");


// info current user
const user = os.userInfo();

console.log(user);

// method return the system uptime in sec
console.log(`The Systime Uptime ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

// OS module provide the in4 about server or device running NodeJs app
// To retrieve in4 about device from client-side, use navigator built-in Js object
