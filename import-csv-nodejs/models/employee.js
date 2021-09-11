var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({

   nameoftheCandidate: { type: String, Required:  'nameoftheCandidate cannot be left blank.' },

  Email:    { type: String, unique:true,    Required:  'Email cannot be left blank.'},

  Mobileno: { type: String },

  DateofBirth: { type: String },

  WorkExperience: { type: String },

  ResumeTitle:{type:String},

  CurrentLocation:{type:String},

  CurrentDesignation:{type:String}

});

module.exports = mongoose.model('employee', EmployeeSchema);