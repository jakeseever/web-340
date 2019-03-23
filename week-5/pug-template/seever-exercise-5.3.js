/*
============================================
; Title:  seever-exercise-5.3.js
; Author: Jake Seever
; Date:   22 March 2019
; Description: Demonstrates the PUG view engine
;===========================================
*/

var header = require("../../seever-header.js"); // Require the header.js file
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 5.3"));
console.log('\n');

// Start

// Require Statements
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express(); // Set the application to a variable, use express

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory.
app.set("view engine", "pug"); // Tell Express to use the view engine.

app.get("/", function(request, response) {  // Create a get request and return a response
  response.render("index", { // Output message to the index.pug document
    message: "Strive not to be a success, but rather to be of value. -Albert Einstein"
  });
});

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(8080, function(){
  console.log("Application stated on port 8080");
})


