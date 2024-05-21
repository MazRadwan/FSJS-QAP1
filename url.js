// Maz Radwan FSJS QAP1

//URL core object
// The URL module in Node.js provides utilities for URL resolution and parsing.
// It can be used to parse URLs into their components, such as the protocol, hostname,
//port, pathname, and query string.This is useful for handling and manipulating URL strings in web
//applications.

// the following code demonstrates the basic usage of the url module, including parsing a URL, accessing its components,
//formatting a URL object, and resolving a relative URL, with all events logged to the terminal.

const url = require("url");

// sample URL string
const urlString = "https://www.example.com:8080/path/name?query=string#hash";

// parse URL string into an object
const parsedUrl = url.parse(urlString);

console.log("Parsed URL :");
console.log(parsedUrl);

// access and log URL components
console.log("Protocol:", parsedUrl.protocol);
console.log("Host:", parsedUrl.host);
console.log("Port:", parsedUrl.port);
console.log("Pathname:", parsedUrl.pathname);
console.log("Query:", parsedUrl.query);
console.log("Hash:", parsedUrl.hash);

// format the url object back into a string
const formattedUrl = url.format(parsedUrl);
console.log("Formatted URL:", formattedUrl);

// resolve a relative URL
const baseUrl = "https://www.example.com:8080/path/name";
const relativeUrl = "../newpath";
const resolvedUrl = url.resolve(baseUrl, relativeUrl);
console.log("Resolved URL:", resolvedUrl);
