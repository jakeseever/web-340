/*
============================================
; Title:  seever-assignment-6.3.js
; Author: Professor Krasso
; Date:   30 March 2019
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

// Require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// Connection to Mongo

// Set the connection string to a variable.
var mongoDB = "mongodb+srv://testUser:Brewers19@ems-ap5nb.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise = global.Promise; // Add Mongo promise
var db = mongoose.connection;  // Variable to hold the connection.
db.on("error", console.error.bind(console, "MongoDB connected error: ")); // Connection error Handling
db.once("open", function() { // Open the connection
  console.log("Application connected to MongoDB instance");  // Write to the console once the connection is established.
});


var app = express(); // Set the application to a variable, use express
app.use(logger("dev")); // Use the logger.

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(8080, function(){
  console.log("Application stated on port 8080");
})

