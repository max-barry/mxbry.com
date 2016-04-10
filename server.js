var express = require("express"),
    app = express(),
    env = process.env.NODE_ENV || "development",
    bodyParser = require('body-parser');

// Load New Relic
require('dotenv').load();
if (env !== "development") {
    require("newrelic");
}

/**
Middleware
*/
app.use(bodyParser.json());
app.use('/static', express.static("./public"));

/**
Statics
*/
 
/**
Template settings
*/
app.locals.pretty = true;
require("./config/swig-conf.js")(app);

/**
Global template variables
*/
app.locals.global = {
    languages: require("./data/languages.js").languages,
    urls: require("./data/urls.js").urls,
    meta: require("./data/meta.js")
};

/**
Routes
*/
var routes = require("./routes"),
    urls = app.locals.global.urls;

// Index
app.get(urls.index, routes.index);

// Work index and slugs
app.get(urls.work, routes.work.index);
app.get(urls.work + ":slug", routes.work.slug);

// CMS Ingestion
app.post(urls.ingest, routes.ingest.index);

// Sitemap
app.get(urls.sitemap, routes.sitemap.index);

/**
Server
*/
var port = process.env.PORT || 3000;
app.listen(port);
