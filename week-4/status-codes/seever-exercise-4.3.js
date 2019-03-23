/*
============================================
; Title:  seever-exercise-4.3.js
; Author: Jake Seever
; Date:   17 March 2019
; Description: JSON API example that returns
;             JSON from a Node.js Server
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
var logger = require('morgan');

var app = express(); // Set the application to a variable, use express


app.use(logger('dev')); // Use the logger.


app.get("/not-found", function(req, res){
  res.status(404); // if the response equals this, return this json message

  res.json({
    message: "Resource not found."
  });
});

app.get("/ok", function(req, res){
    res.status(200) // if the response equals this, return this json message

    res.json({
      message: "Page loaded correctly."
  });
});

app.get("/not-implemented", function(req, res) {
  res.status(501); // if the response equals this, return this json message

  res.json({
    error: "Page not implemented."
  });
});

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(8080, function(){
  console.log("Application stated on port 8080");
})
