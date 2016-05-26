// Load general packages
var gulp = require('gulp'),
    pkg = require('../package.json'),
    path = require('path');

// Fonts variables
var src = path.join(pkg.src.fonts, '**/*.{eot,woff,woff2,svg,ttf}');
var dest = pkg.build.fonts;

// Copy font files to dest directory
gulp.task('fonts', function() {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
});
