/*
============================================
; Title:  app.js
; Author: Jake Seever
; Date:   22 March 2019
; Description: User interface development - EMS Project
;===========================================
*/

var header = require("../seever-header.js"); // Require the header.js file
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Assignment 5.4 - EMS Project"));
console.log('\n');

// Start

// Require Statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const employee = require('./models/employee');

/**
 * Establishes a database connection to MongoDB (mLab).
 * Make sure you are using the credentials of the "user" you created and not your personal login information.
 */
const mongoDB = 'mongodb+srv://testUser:<Brewers19>@ems-ap5nb.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB, {
  useMongoClient:true
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));
db.once('open', function() {
  console.log('Application connected to MongoDB instance');
});


var app = express(); // Set the application to a variable, use express

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory.
app.set("view engine", "ejs"); // Tell Express to use the view engine.
app.use(logger("short"));



// Test Employees until we start using our MongoDB database for information
 var employees = [

  {
    firstName: "Jake",
    lastName: "Seever", /*
    email: "jwseever@domain.com",
    phone: "715-218-7046",
    location: "Kronenwetter, WI",
    department: "Information Technology",
    position: "Web Developer",
    salary: "$1,000,000" */
  },

  {
    firstName: "Michael",
    lastName: "Ausloos" /*
    /*email: "mausloos@jsdesigns.com",
    phone: "715-222-7249",
    location: "Kronenwetter, WI",
    department: "Information Technology",
    position: "Software Developer",
    salary: "$80,000" */
  },

  {
    firstName: "Evelyn",
    lastName: "Kizewski", /*
    email: "ekizewski@jsdesigns.com",
    phone: "715-997-3029",
    location: "Wausau, WI",
    department: "Information Technology",
    position: "Network Specialist",
    salary: "$100,000" */
  },

  {
    firstName: "Matt",
    lastName: "Carlson" /*
    email: "mcarlson@jsdesigns.com",
    phone: "715-451-7777",
    location: "Wausau, WI",
    department: "Information Technology",
    position: "Intern Developer",
    salary: "$50,000" */
  }
];


app.get("/", function(request, response) {  // Create a get request and return a response
  response.render("index", { // Output message to the index.ejs document
    title: "EMS Home Page",
    employees: employees
  });
});

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(8080, function(){
  console.log("Application stated on port 8080");
});
