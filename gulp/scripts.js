// Common imports
var gulp = require('gulp'),
    pkg = require('../package.json'),
    path = require('path'),
    gutil = require("gulp-util");

// Scripts specific packages
var modernizr = require('gulp-modernizr'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream');

// Scripts variables
var src = path.join(pkg.src.js, '**/*.{js,jsx}'),
    dest = path.join(process.cwd(), pkg.build.js);

var webpackSettings = require("./webpack.config.js");

gulp.task('scripts', function(done) {
    return gulp.src(src)
        .pipe(webpackStream(webpackSettings, webpack))
        .on('error', function(error) {
            gutil.log(error.message);
            this.emit('end');
        })
        .pipe(gulp.dest(dest));
});

gulp.task('modernizr', function() {
    return gulp.src(path.join(pkg.src.scss, '**/*.scss'))
        .pipe(modernizr({
            tests: [
                'backgroundcliptext'
            ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
});
