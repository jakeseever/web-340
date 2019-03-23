/*
============================================
; Title:  seever-exercise-5.2.js
; Author: Jake Seever
; Date:   22 March 2019
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

var header = require("../../seever-header.js"); // Require the header.js file
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 5.2"));
console.log('\n');

// Start

// Require Statements
var express = require("express");
var http = require("http");
var path = require("path");
// var logger = require('morgan');

var app = express(); // Set the application to a variable, use express

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory.
app.set("view engine", "ejs"); // Tell Express to use the view engine.

// Create an array of composers.
var composers = [
  "Bach",
  "Mozart",
  "Beethoven",
  "Verdi"
];

// Routes
app.get("/", function(request, response){  // Create a get request and return a response
  response.render("index", { // Output our composer names to the index page.
    names: composers
  });
});

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(8080, function(){
  console.log("Application stated on port 8080");
})
