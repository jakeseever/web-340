/*
============================================
; Title:  seever-assignment-2.4.js
; Author: Jake Seever
; Date:   01 March 2019
; Description: Create a node.js server and will return the index.ejs page
;===========================================
*/

var header = require('../../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 2.3"));
console.log('\n');

//Start

// require statements

const http = require('http'); // Require the express module.
const express = require('express'); // Require the http library to start the server.
const path = require('path'); // Call the express function to start an new express application.

// initialize the application
let app = express();


app.set('views', path.resolve(__dirname, 'views')); // Tell Express the views are in the views directory
app.set('view engine', 'ejs'); // Tells express to use the EJS view engine

/**
 * Returns the index.ejs page
 */
app.get('/', function(request, response){
  response.render('index', {
    firstName: 'Jake',
    lastName: 'Seever',
    address: '835 Glade Court'
  });
});

/**
 * Creates a new server to listen on the 8080 port.
 */
 http.createServer(app).listen(8080, function(){
   console.log('EJS-Views app started on port 8080.');
 })


//End
