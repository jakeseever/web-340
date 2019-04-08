/*
============================================
; Title:  seever-assignment-7.3.js
; Author: Jake Seever
; Date:   06 April 2019
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

var header = require("../../../seever-header.js"); // Require the header.js file
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 7.3"));
console.log('\n');

// Require statements
var fruits = require("../seever-fruits");

var chai = require("chai");
var assert = require("assert");


describe("fruits", function() { // Describe the test
  it("should return an array of fruits", function(){ // Describe what should be happening.
    var f = fruits("Apple,Orange,Mango,Cherry"); // Create an array of fruits for testing.
    assert(Array.isArray(f));
  });
});
