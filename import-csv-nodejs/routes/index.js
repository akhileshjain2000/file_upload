var express = require('express');
var csv = require("fast-csv");
var router = express.Router();
var fs = require('fs');

var mongoose = require('mongoose');

var employee  = mongoose.model('Employees');

var csvfile = __dirname + "/../public/files/Klimb Assignment.csv";
var stream = fs.createReadStream(csvfile);


router.get('/', function(req, res, next) {

    res.render('index', { title: 'Import CSV using NodeJS' });

}).get('/import', function(req, res, next) {

   
    var csvStream = csv()
        .on("data", function(data){
         
         var item = new employee({
              nameoftheCandidate: data[0] ,
              Email: data[1]   ,
              Mobileno: data[2],
              DateofBirth: data[3],
              WorkExperience:data[4],
              ResumeTitle:data[5],
              CurrentLocation:data[6],
              PostalAddress:data[7],
              CurrentEmployeer:data[8],
              CurrentDesignation:data[9]
         });
         
          item.save(function(error){
            console.log(item);
              if(error){
                   throw error;
              }
          }); 

    }).on("end",function(){
          console.log("End of file import");
    });
  
    stream.pipe(csvStream);
    res.json({success : "Data imported successfully.", status : 200});
     
  }).get('/fetchdata', function(req, res, next) {
    
    employee.find({}, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
  
});
module.exports = router;