// Load general packages
var gulp = require('gulp'),
    pkg = require('../package.json');

// Version bump packages
var bump = require('gulp-bump');

// Version bump variables
var src = ['./package.json', './bower.json'];
var dest = './';

// Version bump tasks
gulp.task('bump', function() {
    return gulp.src(src)
        .pipe(bump())
        .pipe(gulp.dest(dest));
});

gulp.task('bump:minor', function(){
    return gulp.src(src)
        .pipe(bump({ type: 'minor' }))
        .pipe(gulp.dest(dest));
});

gulp.task('bump:major', function(){
    return gulp.src(src)
        .pipe(bump({ type: 'major' }))
        .pipe(gulp.dest(dest));
});
