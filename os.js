// Maz Radwan FSJS QAP1

//OS core object
// The `os` module provides a way of interacting with the operating system.It allows you to access info
// about the system, such as the CPU, memory, network interfaces etc.

// This code will retrieve various info about the operating system and log it to the console.

const os = require("os");

// get the operating system name
const osType = os.type();
console.log("Operating System:", osType);

// get the operating system platform
const osPlatform = os.platform();
console.log("Platform:", osPlatform);

// get the operating system architecture
const osArch = os.arch();
console.log("Architecture:", osArch);

// get the hostname
const hostname = os.hostname();
console.log("Hostname:", hostname);

// get system uptime
const uptime = os.uptime();
console.log("Uptime:", uptime, "seconds");

// get the total memory
const totalMemory = os.totalmem();
console.log("Total Memory:", totalMemory, "bytes");

// get the free memory
const freeMemory = os.freemem();
console.log("Free Memory:", freeMemory, "bytes");

// get cpu info
const cpus = os.cpus();
console.log("CPU Info:", cpus);

// get the network interfaces
const networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:", networkInterfaces);

// get the home directory
const homeDir = os.homedir();
console.log("Home Directory:", homeDir);

// get the temp files directory
const tmpDir = os.tmpdir();
console.log("Temp files Directory:", tmpDir);
