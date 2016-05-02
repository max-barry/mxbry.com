var projectFetcher = require("./get_projects.js");

exports.index = function(req, res) {
    res.render("pages/projects-lister.html");
};

exports.slug = function(req, res) {
    var _ = require("lodash"),
        fs = require('fs');

    var slug = req.params.slug;

    projectFetcher.retrieve(function(err, works){

        var work = _.find(works, {"slug": slug});

        try {
            var mdown_file = require.resolve("../public/data/" + slug + ".mdown"),
                mdown = fs.readFileSync(mdown_file, "utf8");
        } catch(e) {
            var mdown = null;
        }   

        if (!!work && !!mdown) {
            res.render("pages/project.html", {
                project: work,
                body: mdown
            });
        } else {
            res.sendStatus(404);
        }
    });


};