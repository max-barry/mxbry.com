// Load Firebase
var Firebase = require("firebase"),
    async = require("async");

var _retrieve = function(callback) {
    var db = new Firebase("https://mxbry.firebaseio.com/");

    db.child("projects").once("value", function(snapshot){
        callback(null, snapshot.val());
    });
};

module.exports.retrieve = _retrieve;

module.exports.api = function(req, res) {

    async.series([_retrieve], function(err, data){
        res.json({ projects: data });
    });

};