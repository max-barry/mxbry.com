exports.work = require("./work.js");
exports.sitemap = require("./sitemap.js");
exports.ingest = require("./ingest.js");

exports.index = function(req, res) {
    res.render("pages/index.html", {homepage: true});
};
