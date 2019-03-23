/*
============================================
; Title:  seever-assignment-4.4.js
; Author: Jake Seever
; Date:   17 March 2019
; Description: Demonstrates CRUD operations in
;             a Node.js API.
;===========================================
*/

var header = require("../../seever-header.js"); // Require the header.js file
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 4.3"));
console.log('\n');

// Start

// Require Statements
var express = require("express");
var http = require("http");
// var logger = require('morgan');


var app = express(); // Set the application to a variable, use express


// app.use(logger('dev')); // Use the logger.

app.get("/", function(request, response) { // Create GET request
  response.send("API was invoked as an HTTP GET request.");// Response for a GET request
});

app.put("/", function(request, response){ // Create a PUT request
  response.send("API was invoked as an HTTP PUT request."); // Response for a PUT request.
});

app.post("/", function(request, response){ // create a POST request
  response.send("API was invoked as an HTTP POST request"); // Response for a POST request.
});

app.delete("/", function(request, response){ // Create a DELETE request
  response.send("API was invoked as an HTTP DELETE request") // Response for a DELETE request.
});

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(8080, function(){
  console.log("Application stated on port 8080");
})
