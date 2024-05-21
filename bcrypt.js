// Maz Radwan FSJS QAP1

//Installing and using bcrypt NPM package
//installed using npm install bcrypt --save

const bcrypt = require("bcrypt");

// password to hash
const password = "MazP@ssw0rd";

// number of salt rounds -- the higher the number, the more secure the hash
const saltRounds = 10;

// hash the password
bcrypt.hash(password, saltRounds, function (err, hash) {
  if (err) {
    console.error("Error hashing password:", err);
    return;
  }

  // log the hashed password to console
  console.log("Hashed password:", hash);

  // compare the hashed password with the original password
  bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      console.error("Error comparing passwords:", err);
      return;
    }
    // output the comparison result to the console
    console.log("Passwords match:", result);
  });
});
