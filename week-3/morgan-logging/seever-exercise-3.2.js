/*
============================================
; Title:  seever-exercise-3.2.js
; Author: Jake Seever
; Date:   09 March 2018
; Description: Demonstrates the configuration of a Morgan logger.
;===========================================
*/

var header = require("../../seever-header.js");
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 3.2"));
console.log('\n');

// Start

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// Set the application to a variable, use express
var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory.
app.set("view engine", "ejs"); // Tell Express to use the view engine.

app.use(logger("short")); // Tell express to use the Morgan Logger

/**
 * Returns the index.ejs page
 */
app.get("/", function(request, response) { // Create a get request and return a response
  response.render("index", { // Render the index.ejs page
    message: "Welcome to the Morgan Logger Demonstration, it worked!" // output the response message
  });
});

/**
 * Creates a new server to listen on the 3000 port.
 */
http.createServer(app).listen(3000, function(){
  console.log("Application started on port 3000");
})

//End
