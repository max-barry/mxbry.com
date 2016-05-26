// Common packages
var gulp = require('gulp'),
    pkg = require('../package.json'),
    path = require('path');

// Browser-Sync and plugins
var browserSync = require('browser-sync'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

// Load Webpack settings
var webpackSettings = require('./webpack.config.js'),
    bundler = webpack(webpackSettings);

gulp.task('serve', gulp.parallel(function() {
    gulp.watch(path.join(pkg.src.scss, '**/*.scss'), gulp.parallel('styles'));
    gulp.watch(path.join(pkg.paths.templates, '**/*.{swig,json,html}'), gulp.parallel('templates'));
}, function() {
    browserSync({
        server: {
          baseDir: [ pkg.paths.build ],

          middleware: [
            webpackDevMiddleware(bundler, {
              publicPath: webpackSettings.output.publicPath,
              stats: { colors: true }
            }),
            webpackHotMiddleware(bundler)
          ]
        },

        files: [pkg.build.css + '**/*.css', pkg.paths.build + '**/*.html']
    });
}));

// Aliases
gulp.task('watch', gulp.parallel(['serve']));
gulp.task('connect', gulp.parallel(['serve']));
gulp.task('run', gulp.parallel(['serve']));
