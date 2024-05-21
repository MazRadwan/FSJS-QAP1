//Maz Radwan FSJS QAP1

//HTTP core object - Http object allows you to create HTTP servers & make HTTP requests.
// It provides functionality for handling requests, responses, setting headers and managing routing.
// all of which are fundamental to building web applications, APIs and networked services.

const http = require("http");

// create http server
const server = http.createServer((req, res) => {
  // log request metho and url
  console.log(`Received ${req.method} request for: ${req.url}`);

  // use a switch statement to handle different request methods
  switch (req.url) {
    case "/":
      if (req.method === "GET") {
        // respnd with a message
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is the Home Page");
      } else {
        // respond with a 405 Method Not Allowed
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
      }
      break;
    case "/about":
      if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is the About Page");
      } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
      }
      break;
    case "/data":
      if (req.method === "POST") {
        // HANDLE POST REQUEST TO /DATA
        let body = "";
        //collect data from the request
        req.on("end", (chunk) => {
          body += chunk.toString();
        });
        //when all data received , respond with the received data
        req.on("end", () => {
          console.log("Data received:", body);
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(JSON.stringify({ receveivedData: body }));
        });
      } else {
        // handle unsupported methods for this route with a 405
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
      }
      break;
    default:
      // otherwise respond with a 404 Not Found
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      break;
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
server.on("error", (err) => {
  console.error("Server error:", err);
});
server.on("request", (req, res) => {
  console.log("Request received");
});
