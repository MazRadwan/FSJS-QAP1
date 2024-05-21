//Maz Radwan FSJS QAP1

//Buffer core object
// The Buffer class in Node.js is used to handle binary data. It is a global class that can be accessed
// in an application without importing the buffer module.
// Buffers are used to store raw binary data, which is useful when working with streams of data,
// such as reading files or receiving data over the network.
// Buffers are stored in memory .

// The following code will This demonstrates the creation, modification, slicing, and copying of buffers,
// and logs the results to the terminal.

// create a buffer from a string

const bufferFromStr = Buffer.from("Hello to whomever is marking this QAP");
console.log("Buffer from string:", bufferFromStr);
console.log("Buffer from string (as string):", bufferFromStr.toString());

// create a buffer specific size
const bufferAlloc = Buffer.alloc(10);
console.log("Buffer allocated:", bufferAlloc);

//write date to buffer
bufferAlloc.write("Node.js");
console.log("Buffer after write:", bufferAlloc);
console.log("Buffer after write (as string):", bufferAlloc.toString());

// write a buffer with a specific size and fill it with a value
const bufferAllocFill = Buffer.alloc(10, "A");
console.log("Allocated and filled buffer:", bufferAllocFill);
console.log(
  "Allocated and filled buffer (as string):",
  bufferAllocFill.toString()
);

// create a buffer from an array
const bufferFromArray = Buffer.from([1, 2, 3, 4, 5]);
console.log("Buffer from array:", bufferFromArray);

// read data from the buffer
console.log("First Byte in buffer from array:", bufferFromArray[0]);
console.log("Second Byte in buffer from array:", bufferFromArray[1]);

// modify buffer data
bufferFromArray[1] = 255;
console.log("Modified buffer from array:", bufferFromArray);

// slice a buffer
const slicedBuffer = bufferFromStr.slice(0, 5);
console.log("Sliced buffer:", slicedBuffer);
console.log("Sliced buffer (as string):", slicedBuffer.toString());

// copy a buffer
const bufferCopy = Buffer.alloc(5);
slicedBuffer.copy(bufferCopy);
console.log("Copied buffer:", bufferCopy);
console.log("Copied buffer (as string):", bufferCopy.toString());
