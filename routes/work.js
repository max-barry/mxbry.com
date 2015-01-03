exports.index = function(req, res) {
    res.render("pages/projects-lister.html");
};

exports.slug = function(req, res) {
    var slug = req.params.slug,
        works = require("../public/data/projects.json").projects,
        _ = require("lodash");

    var work = _.find(works, {"slug": slug});

    if (!!work) {
        res.render("pages/project.html", {
            project: work
        });
    } else {
        res.sendStatus(404);
    }

};