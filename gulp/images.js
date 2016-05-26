// Load general packages
var gulp = require('gulp'),
    pkg = require('../package.json'),
    environments = require('gulp-environments'),
    path = require('path'),
    changed = require('gulp-changed'),
    gutil = require('gulp-util');

// Image specific plugins
var imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp');

// Images variables
var src = path.join(pkg.src.images, '**/*.{png,jpg,jpeg,gif,svg}');
var dest = pkg.build.images;


// Image tasks
gulp.task('images:webp', function() {
    return gulp.src(path.join(dest, '**/*.{png,jpg,jpeg,gif,svg}'))
        .pipe(environments.production(webp()))
        .pipe(gulp.dest(dest));
});

gulp.task('images:optimize', function() {
    return gulp.src(src)
        .pipe(environments.production(imagemin()))
        .pipe(gulp.dest(dest));
});

gulp.task('images', gulp.series('images:optimize', 'images:webp'));
