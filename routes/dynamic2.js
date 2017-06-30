/**
 * Created by piyush on 30/6/17.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    res.send("hello "+req.params.id+" this is "+req.params.name);
});


module.exports =router;
/**
 * Created by piyush on 30/6/17.
 */
