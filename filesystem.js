// Maz Radwan FSJS QAP1

//FileSystem core object
// The `fs` module allows interaction with the file system. It
// provides functions for reading, writing, updating, and deleting files, as well
// as handling directories. It supports both synchronous and asynchronous
// operations, making it versatile for various file handling needs

// The following code will use file system to create, write , read and append the file.
// the console will output the log and content from writing and appending of the file.

const fs = require("fs");
const path = require("path");

//define the file path
const filePath = path.join(__dirname, "sample.txt");

// function to read from the file
const readFile = () => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("File contents:");
    console.log(data);
  });
};

// function to write to the file
const writeFile = () => {
  const content = "This is a sample file created for QAP1\n";
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writhing to file:", err.message);
      return;
    }
    console.log("File has been written successfully");
    readFile();
  });
};
// function to append to file
const appendFile = () => {
  const content = "This is the text that appended to file.\n";
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error("Error appending to file:", err.message);
      return;
    }
    console.log("File has been appended successfully");
    readFile();
  });
};
// start by writing to the file
writeFile();

// append file after two seconds
setTimeout(appendFile, 2000);
