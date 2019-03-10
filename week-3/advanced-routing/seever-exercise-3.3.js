/*
============================================
; Title:  seever-exercise-3.3.js
; Author: Jake Seever
; Date:   09 March 2018
; Description: Demonstrates advanced routing
;===========================================
*/

var header = require("../../seever-header.js");
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 3.3"));
console.log('\n');

// Start

// Require Statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express(); // Set the application to a variable, use express

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory.
app.set("view engine", "ejs"); // Tell Express to use the view engine.

app.use(logger("short")); // Tell express to use the Morgan Logger

/**
 * Returns the index.ejs page
 */
app.get("/:employeeId", function(request, response){ // Create a get request and return a response
  var employeeId = parseInt(request.params.employeeId, 10)

  response.render("index", { // Render the index.ejs page
    employeeId: employeeId // Output the employee id
  });
});

/**
 * Creates a new server to listen on the 3001 port.
 */
http.createServer(app).listen(3001, function(){
  console.log("Application stated on port 3001")
})

// End
