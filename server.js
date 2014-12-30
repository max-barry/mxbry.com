var express = require("express"),
    app = express(),
    swig = require("swig");


app.use('/static', express.static(__dirname + '/public'));
 
/**
Template settings
*/
swig.setDefaults({
    loader: swig.loaders.fs(__dirname + '/views')
});
app.engine("html", swig.renderFile);
app.set("view engine", "html");

 
/**
Routes
*/
app.get("/", function (req, res) {
    res.render("pages/index.html");
});


/**
Server
*/
app.listen(3000);
