/*
============================================
; Title:  seever-assignment-3.4.js
; Author: Jake Seever
; Date:   09 March 2019
; Description: Putting it all together view example
;===========================================
*/

var header = require("../../seever-header.js");
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Assignment 3.4"));
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
app.get("/", function(request, response) { // Create a get request and return a response
  response.render("index", { // Render the index.ejs page
    message: "home page" // output the response message
  });
});

/**
 * Returns the about.ejs page
 */
app.get("/about", function(request, response) { // Create a get request and return a response
  response.render("about", { // Render the about.ejs page
    message: "about page" // output the response message
  });
});

/**
 * Returns the contact.ejs page
 */
app.get("/contact", function(request, response) { // Create a get request and return a response
  response.render("contact", { // Render the contact.ejs page
    message: "contact page" // output the response message
  });
});

/**
 * Returns the product.ejs page
 */
app.get("/products", function(request, response) { // Create a get request and return a response
  response.render("products", { // Render the products.ejs page
    message: "products page" // output the response message
  });
});

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(8080, function(){
  console.log("Application stated on port 8080");
})

// End

