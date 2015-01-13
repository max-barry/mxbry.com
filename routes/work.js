exports.index = function(req, res) {
    res.render("pages/projects-lister.html");
};

exports.slug = function(req, res) {
    var slug = req.params.slug,
        works = require("../public/data/projects.json").projects,
        _ = require("lodash"),
        fs = require('fs');

    var work = _.find(works, {"slug": slug}),
        mdown_file = require.resolve("../public/data/" + slug + ".mdown");
        mdown = fs.readFileSync(mdown_file, "utf8");

    if (!!work) {
        res.render("pages/project.html", {
            project: work,
            body: mdown
        });
    } else {
        res.sendStatus(404);
    }

};