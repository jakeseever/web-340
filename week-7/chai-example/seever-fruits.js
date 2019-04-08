/*
============================================
; Title:  seever-assignment-7.3.js
; Author: Jake Seever
; Date:   06 April 2019
; Description: Function used in a Chai test.
;===========================================
*/

var header = require("../../seever-header.js"); // Require the header.js file
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 7.2"));
console.log('\n');

function fruits(str) { // function to test
  return str.split(","); // return a spit string
}

module.exports = fruits;
