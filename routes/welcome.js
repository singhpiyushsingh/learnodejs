/**
 * Created by piyush on 27/6/17.
 */
var express = require('express');
var router = express.Router();
var getDB=require('./mongodb').getDB;
var db=null;

getDB().then(function successHandler(result) {
        db=result;
    },
    function failureHandler(error) {
    });


router.get('/',function (req,res) {
    var promise=new Promise((resolve,reject)=>{
        db.collection('user').find({}).toArray((err,res)=>{
                resolve(res);
        }) ;

    });
    var output=[];
    promise.then((result)=>{
        res.send(result);
    });
});
module.exports = router;







































/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

var personSchema = mongoose.Schema({
    name: String,
    phone: String
});
var Person = mongoose.model("Person", personSchema);


router.get('/', function(req, res){
    Person.find(function(err, response){
        res.json(response);
    });
});
*/








/*/* GET home page.

router.post('/',function (req,res) {
    var request=req.body;

    res.send("welcome "+request.nme);
    res.send("your phone no. is"+request.phone);

});
*/