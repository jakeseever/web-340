/*
============================================
; Title:  app.js
; Author: Jake Seever
; Date:   22 March 2019
; Description: User interface development - EMS Project
;===========================================
*/

// Start

// Require Statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require('helmet');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var csrf = require('csurf');
var mongoose = require('mongoose');
var Employee = require('./models/employee');


/**
 * Sets up CSRF protection.
 */
var csrfProtection = csrf({ cookie: true });


/**
 * Establishes a database connection to MongoDB (mLab).
 * Make sure you are using the credentials of the "user" you created and not your personal login information.
 */
const mongoDB = 'mongodb+srv://testUser:Brewers19@ems-ap5nb.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB, {

 // useMongoClient:true
 useNewUrlParser:true
});

 // Set the application to a variable, use express
 var app = express();

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error:"));
db.once('open', function() {
  console.log('Application connected to MongoDB instance');
});


// Use the morgan logger
app.use(logger("short"));

// use the body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// use the cookie parser
app.use(cookieParser());

// Use the helmet filter
app.use(helmet.xssFilter());

// Use CSRF protection
app.use(csrfProtection);

/**
 * Intercepts all incoming requests and adds a CSRF token to the response for security.
 */
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory.
app.set("view engine", "ejs"); // Tell Express to use the view engine.
app.set('port', process.env.PORT || 8080); // Set the server port to 8080


/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Fruit[]
 * URL: localhost:8080
 */
app.get('/', function(req, res) {
  Employee.find({}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      res.render('index', {
        title: 'EMS | Home Page',
        employees: employees
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new employee' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New Page'
  });
});

/**
 * Description: Redirects users to the 'employee list' page.
 * Type: HttpGet
 * Request: n/a
 * Response: list.ejs
 * URL: localhost:8080/new
 */
app.get('/list', function(req, res) {
  Employee.find({}, function(error, employees){
    res.render('list', {
      title: 'EMS | Employee List',
      employees: employees
    });
  })
});


/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(req, res) {
  console.log(req.body.txtFirstName);
  console.log("test");

   // get the request's form data
const firstName = req.body.txtFirstName;
const lastName = req.body.txtLastName;

  if (!req.body.txtFirstName || !req.body.txtLastName) {
    res.status(400).send('Entries must have a name');
    return;
  }

console.log(firstName + lastName);


// create a employee model
var employee = new Employee({
  firstName: firstName,
  lastName: lastName
});

// save the employee
employee.save(function(err) {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log(firstName + " " + lastName + ' saved successfully!');
    }
    res.redirect('/');
  });
});

/**
 * Description: Redirects users to the 'home' page'
 * Type: HttpGet
 * Request: queryName
 * Response: view.ejs, Employee[] | index.ejs
 * URL: localhost:8080/view/:queryName
 */
app.get('/view/:queryName', function(req, res) {
  const queryName = req.params['queryName'];

  Employee.find({'firstName': queryName}, function(err, employees) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employees);
      console.log(employees.length + "  We hit the if statement.");
      if (employees.length > 0) {
        res.render('view', {
          title: 'EMS | View',
          employees: employees
        })
      } else {
        console.log("Error in the query.")
        res.redirect('/');
      }
    }
  })
});

/**
 * Creates a new server to listen on the 8080 port.
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log("Application stated on port " + app.get('port'));
});
