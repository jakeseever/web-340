/*
============================================
; Title:  seever-exercise-1.3
; Author: Jake Seever
; Date:   22 February 2019
; Description: Modules Example
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 1.3"));
console.log('\n');

// Create a variable to hold and require a url.
var url = require('url');

// variable to hold parsed url
var parsedURL = url.parse('https://www.testExample.com/account?name=seever');

// output the different parts of the parsed url.
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
