/*
============================================
; Title:  seever-exercise-2.3.js
; Author: Jake Seever
; Date:   01 March 2019
; Description: Routes example
;===========================================
*/

var header = require('../../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 2.3"));
console.log('\n');

//Start

// Require the express module.
var express = require('express');

// Require the http library to start the server.
var http = require('http');

// Call the express function to start an new express application.
var app = express();

// routes

// route to respond with home page message.
app.get('/', function(req, res){
  res.end('Welcome to the home page.\n');
});

// route to respond with the about page message.
app.get('/about', function(req, res){
  res.end('Welcome to the about page.\n');
});

// route to respond with the contact page message.
app.get('/contact', function(req, res){
  res.end('Welcome to the contact page.\n');
});

// handle invalid url addresses and respond with 404 message.
app.use(function(req, res){
  res.statusCode = 404;
  res.end('404!\n');
});

// Create a node server and start listening on port 3000.
http.createServer(app).listen(3000, function(){
  console.log('Application started on port %s', 3000)
});
