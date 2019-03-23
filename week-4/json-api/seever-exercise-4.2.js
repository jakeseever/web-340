/*
============================================
; Title:  seever-exercise-4.2.js
; Author: Jake Seever
; Date:   17 March 2019
; Description: JSON API example that returns
;             JSON from a Node.js Server
;===========================================
*/

var header = require("../../seever-header.js"); // Require the header.js file
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 4.2"));
console.log('\n');

// Start

// Require Statements
var express = require("express");
var http = require("http");
var logger = require('morgan');

var app = express();// Set the application to a variable, use express

app.use(logger('dev')); // Use the logger.


app.get("/customer/:id", function(request, response){ // Create a get request and return a response
  var id = parseInt(request.params.id, 10);

  response.json({ // Create a json object for the response.
    firstName: "Jake",
    lastName: "Seever",
    employeeId: id
  });
});

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});



