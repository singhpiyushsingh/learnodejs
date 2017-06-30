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
    res.send("hello ");
});


router.get('/:id',function (req,res) {
    res.send("hello 2");
});


module.exports = router;







