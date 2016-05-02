exports.work = require("./work.js");
exports.sitemap = require("./sitemap.js");

// projects API
// exports.api = require("./get_projects.js");
exports.api = {};
exports.api.projects = require("./get_projects.js").api;

exports.index = function(req, res) {
    res.render("pages/index.html", {homepage: true});
};
