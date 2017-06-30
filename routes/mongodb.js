/**
 * Created by piyush on 27/6/17.
 */
var mongo=require('mongodb').MongoClient;
var db=null;
var getDB=function () {
    var promise=new Promise(function(resolve,reject){
        if(db!=null){
            resolve(db);
        }
        else{
            mongo.connect('mongodb://127.0.0.1:27017/mydb', function(err, dba) {
                if (err) throw err;
                db=dba;
                console.log("Connection")
                resolve(db);
            });
        }
    });

    return promise;

}
module.exports.getDB=getDB;