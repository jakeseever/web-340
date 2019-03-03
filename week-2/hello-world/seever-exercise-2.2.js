/*
============================================
; Title:  seever-exercise-2.2.js
; Author: Jake Seever
; Date:   01 March 2019
; Description: Creates a new server and listens on port 8080.
;===========================================
*/

var header = require('../../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 1.3"));
console.log('\n');

//Start

// Require the express module.
var express = require('express');

// Require the http library to start the server.
var http = require('http');

// Call the express function to start an new express application.
var app = express();

// function to use express with request and response parameters.
app.use(function(req, res) {

  // output to the console that a request has came in
  console.log('In comes a request to: %s' + req.url);

  // output using the response.
  res.end('Hello World\n');
});

// Start the server on port 8080.
http.createServer(app).listen(8080);


//End
