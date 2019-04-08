/*
============================================
; Title:  employees.js
; Author: Jake Seever
; Date:   04 April 2019
; Description: File for the Fruit database model
;===========================================
*/


// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let employeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

// Export the model so it is available publicly.
module.exports = mongoose.model('Employee', employeeSchema);
