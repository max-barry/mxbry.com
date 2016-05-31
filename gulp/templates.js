// Load general packages
var gulp = require('gulp'),
    pkg = require('../package.json'),
    environments = require('gulp-environments'),
    path = require('path'),
    gutil = require("gulp-util");

// Load swig specific packages
var swig = require('gulp-swig'),
    prettify = require('gulp-prettify'),
    cachebust = require('gulp-cache-bust');

var opts = {
    templatePath: pkg.paths.templates,
    load_json: true,
    json_path: pkg.templates.data,
    data: {
        data: require(path.join('../', pkg.templates.data, 'data.json')),
        meta: require(path.join('../', pkg.templates.data, 'meta.json')),
    },
    defaults: { cache: false },
    // Register template tags and helpers
    // setup: function(swig) {
        // marked.useTag(swig, 'markdown');
    // }
};

// Task variables
var src = path.join(pkg.templates.pages, '**/*.{swig,html}'),
    dest = pkg.paths.build;

// Swig compile
gulp.task('templates', function() {
    return gulp.src(src)
        .pipe(swig(opts))
        .on('error', function(error) {
            gutil.log(error.message);
            this.emit('end');
        })
        .pipe(environments.production(prettify()))
        .pipe(environments.production(cachebust()))
        .pipe(gulp.dest(dest));
});


gulp.task('templates:sitemap', function() {
    return gulp.src(path.join('./src/sitemap.xml'))
        .pipe(gulp.dest(dest));
});
