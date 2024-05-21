// Maz Radwan FSJS QAP1

//installation and demo of the cookie NPM package
//installed using npm install cookie --save

// demo code for parsing a serialized cookie string

const cookie = require("cookie");

// create a cookie string
const serializedCookie = cookie.serialize("name", "ChipsAhoy", {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 7, // 1 week
  secure: true,
});

// log the serialized cookie to the console
console.log("Serialized Cookie:", serializedCookie);

// parse the cookie string
const parsedCookie = cookie.parse(serializedCookie);

// log the parsed cookie to the console
console.log("Parsed Cookie:", parsedCookie);
