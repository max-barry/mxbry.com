var express = require("express"),
    app = express(),
    swig = require("swig");

app.use('/static', express.static(__dirname + "/public"));
 
/**
Template settings
*/
require("./config/swig-conf.js")(app, swig);

/**
Global template variables
*/
app.locals.global = {
    languages: require(__dirname + "/data/languages.js").languages,
    urls: require(__dirname + "/config/urls.js").urls
};

/**
Routes
*/
var routes = require(__dirname + "/routes"),
    urls = app.locals.global.urls;

// Index
app.get(urls.index, routes.index);

// Work index and slugs
app.get(urls.work, routes.work.index);
app.get(urls.work + ":slug", routes.work.slug);

/**
Server
*/
app.listen(3000);
