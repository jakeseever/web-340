/*
============================================
; Title:  seever-assignment-6.3.js
; Author: Jake Seever
; Date:   06 April 2019
; Demonstrations how to create a TDD unit test.
;===========================================
*/

var header = require("../../../seever-header.js"); // Require the header.js file
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 7.2"));
console.log('\n');


var assert = require("assert");

describe("String#split", function() { // Describe the test
  it("should return an array of fruits", function(){ // Describe what should be happening.
    assert(Array.isArray("Apple,Orange,Mango,Cherry".split(","))); // Create an array of fruits for testing.
  });
});


