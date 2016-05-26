// Load general packages
var gulp = require('gulp'),
    pkg = require('../package.json'),
    environments = require('gulp-environments'),
    path = require('path');

// Load CSS specific packages
var sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    changed = require('gulp-changed'),
    connect = require('gulp-connect');

// Task variables
var src = path.join(pkg.src.scss, '**/*.scss'),
    dest = pkg.build.css;

// Gulp tasks
gulp.task('styles', function() {

    var processors = [
        require('autoprefixer')({
            browsers: ['last 3 version']
        }),
        require('pixrem')(),
        require('cssnano')()
    ];

    var includePaths = [
        'bourbon/app/assets/stylesheets/',
        'reset-scss/',
        'scut/dist/'
    ].map(function(package) {
        return path.join(pkg.paths.bower, package)
    });

    return gulp.src(src)
        .pipe(changed(dest))
        // If development environment, create sourcemaps
        .pipe(environments.development(sourcemaps.init()))
        // Compile SASS
        .pipe(sass({
            includePaths: includePaths
        }).on('error', sass.logError))
        // If production environment, run postcss
        .pipe(environments.production(postcss(processors)))
        // TODO If production environment, collate media queries
        // If development environment, write sourcemaps
        .pipe(environments.development(sourcemaps.write()))
        // Write CSS to build/css
        .pipe(gulp.dest(dest));
});
