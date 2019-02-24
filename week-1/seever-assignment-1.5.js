/*
============================================
; Title:  seever-exercise-1.5
; Author: Jake Seever
; Date:   24 February 2019
; Description: Hello World with Node.js
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Assignment 1.5"));
console.log('\n');

// Start

// variable requiring http
var http = require("http");

// function to process the request
function processRequest(req, res){

  // This variable will be outputted to the browser window.
  var body = "Hello World, Welcome to week 1 of Node.js. We have out put to a web browser using Node!";

  var contentLength = body.length;

  res.writeHead(200, {

    'Content-Length': contentLength,
    'Content-Type':'text/plain'
  });

  // after the response has ended
  res.end(body);

}

var s = http.createServer(processRequest);

// specify the port number to listen on.
s.listen(8080);


// End
