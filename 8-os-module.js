const os = require('os');

// info about the current user.

const user = os.userInfo();
console.log(user);

// uptime of the system

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.hostname(),
  type: os.type(),
  freemem: os.freemem(),
  release: os.release(),
  totalmem: os.totalmem(),
  machine: os.machine(),
  platform: os.platform(),
  version: os.version(),
  arch: os.arch(),
};

console.log(currentOs);
