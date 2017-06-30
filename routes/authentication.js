var express = require('express');
var router = express.Router();
var getDB=require('./mongodb').getDB;
var db=null;

getDB().then(function successHandler(result) {
    db=result;
},
    function failureHandler(error) {
});





router.post('/',function (req,res) {
    var adder=req.body;
    db.collection('user').insert({name:adder.name,phone:adder.phone});
    res.send("data entered into database");
});

module.exports = router;









/*

 var mongoose = require('mongoose');
 mongoose.createConnection('mongodb://localhost/');

 //mongodb://127.0.0.1:27017

 var personSchema = mongoose.Schema({
 name: String,
 phone: String
 });
 var Person = mongoose.model("Person", personSchema);


 router.post('/',function (req,res) {
 var personInfo=req.body;

 var newPerson=new Person(
 {
 name:personInfo.name,
 phone:personInfo.phone
 }

 );

 newPerson.save(function(err, Person){
 if(err)
 res.send("error while insertion");
 // res.render('show_message', {message: "Database error", type: "error"});
 else
 res.send("Data added to mydb");
 });


 });
 */






/*
* var express = require('express');
 var router = express.Router();



router.get('/',function (req,res,next) {

    var output={"title":"hello piyush"}
    res.render('index',output)

});

module.exports = router;
*/