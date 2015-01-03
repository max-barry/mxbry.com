var marked = require("marked");

module.exports = function(app, swig) {
    /**
    Swig template engine initialisation
    */
    swig.setDefaults({
        loader: swig.loaders.fs("views/")
    });

    app.engine("html", swig.renderFile);
    app.set("view engine", "html");


    /**
    Swig custom filters
    */
    swig.setFilter("slugify", function(input){
        return input.toLowerCase().replace(" ", "-");
    });

    function markdown(input) {
        return marked(input);
    }
    markdown.safe = true;
    swig.setFilter("markdown", markdown);

};
