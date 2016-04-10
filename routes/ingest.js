// Libraries
var fs = require("fs");

var _saveIngestedData = function(data) {
    var jsonString = JSON.stringify(data),
        projectsDataFilepath = "./public/data/projects.json";

    fs.writeFileSync(projectsDataFilepath, JSON.stringify({"projects": data}));
};

exports.index = function(req, res){
    var authHeader = req.get("authorization");

    // Check that the request has the correct authorization header
    if (authHeader &&
        authHeader.search('Basic ') === 0 &&
        new Buffer(authHeader.split(' ')[1], 'base64').toString() == process.env.AUTHORIZATION) {
        // Save the posted json
        _saveIngestedData(req.body);
        return res.sendStatus(201); 
    }
    
    res.sendStatus(401); 
    // res.send();
};