module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        nodemon: {
            dev: {
                script: 'server.js',
                options: {
                    nodeArgs: ["--debug"],
                    ignore: [
                        "<%= pkg.paths.project %>**",
                        "<%= pkg.paths.bower %>**",
                        "<%= pkg.paths.node %>**",
                        "Gruntfile.js"
                    ],
                    ext: "js,html"
                }
            }
        },
        // Compass to handle CSS compilation and concatanation
        compass: {
            dist: {
                options: {
                    config: "config.rb"
                }
            }
        },
        // Copy fonts and images to build output directory
        copy: {
            images: {
                files: [{
                    expand: true,
                    cwd: "<%= pkg.src.images %>",
                    src: "**/*",
                    dest: "<%= pkg.dest.images %>"
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: "<%= pkg.src.fonts %>",
                    src: ["**/*", "!**/*.json"],
                    dest: "<%= pkg.dest.fonts %>"
                }]
            },
            devdata: {
                src: "<%= pkg.src.data %>projects.example.json",
                dest: "<%= pkg.dest.data %>projects.json"
            },
            livedata: {
                src: "<%= pkg.src.data %>projects.json",
                dest: "<%= pkg.dest.data %>projects.json"
            },
            markdown: {
                files: [{
                    expand: true,
                    cwd: "<%= pkg.src.data %>markdown/",
                    src: ["*.mdown", ],
                    dest: "<%= pkg.dest.data %>"
                }]
            }
        },
        // Watch task to compile files live
        watch: {
            js: {
                files: ["<%= jshint.files %>"],
                tasks: ["jshint", "concat"]
            },
            scss: {
                files: ["<%= pkg.src.scss %>**/*.scss"],
                tasks: ["compass", "cmq"]
            },
            images: {
                files: [
                    "<%= pkg.src.images %>**/*.{jpg,svg,jpeg,gif,png}"
                ],
                tasks: ["copy:images"]
            },
            fonts: {
                files: [
                    "<%= pkg.src.fonts %>**/*.{eot,woff,svg,ttf}"
                ],
                tasks: ["copy:fonts"]
            },
            data: {
                files: [
                    "<%= pkg.src.data %>**/*.json"
                ],
                tasks: ["copy:devdata"]
            },
            markdown: {
                files: [
                    "<%= pkg.src.data %>**/*.mdown"
                ],
                tasks: ["copy:markdown"]
            }
        },
        /**
        General
          -  Clean build folder
          -  Javascript documentation
          -  Project version bump
        */
        clean: [
            "<%= pkg.dest.assets %>",
            "<%= pkg.templates.includes %>criticalcss/*.html",
        ],
        docco: {
            debug: {
                src: ["<%= pkg.src.js %>**/*.js"],
                options: {
                    output: "<%= pkg.paths.docs %>js/"
                }
            }
        },
        bump: {
            options: {
                push: false,
                pushTo: "origin",
                files: [
                    "package.json",
                    "bower.json"
                ]
            }
        },
        /**
        Performance:
          -  JS concatenation
          -  JS uglification
          -  JS linting
          -  CSS Minification
          -  HTML Prettification
          -  Image optimisation
          -  WebP creation
          -  Perfbudget testing
          -  JSON minification
        */
        concat: {
            options: {
                separator: ";\n"
            },
            dist: {
                src: [
                    "<%= pkg.paths.bower %>jquery/dist/jquery.min.js",
                    "<%= pkg.paths.bower %>viewport-units-buggyfill/viewport-units-buggyfill.js",
                    // "<%= pkg.paths.bower %>jquery.wait/jquery.wait.js",
                    "<%= pkg.paths.bower %>lodash/dist/lodash.min.js",
                    // "<%= pkg.paths.bower %>multiline/browser.js",
                    "<%= pkg.paths.bower %>doT/doT.min.js",
                    "<%= pkg.paths.bower %>moment/min/moment.min.js",
                    "<%= pkg.src.js %>**/*.js"
                ],
                dest: "<%= pkg.dest.js %>app.js"
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n",
                preserveComments: "some"
            },
            dist: {
                files: {
                    "<%= pkg.dest.js %>app.js": ["<%= concat.dist.dest %>"],
                }
            },
            dev: {
                files: {
                    "<%= pkg.dest.js %>modernizr.min.js": ["<%= pkg.paths.bower %>modernizr/modernizr.js"]
                }
            }
        },
        jshint: {
            files: [
                "<%= pkg.src.js %>**/*.js"
            ],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    alert: true,
                    document: true,
                    window: true
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: "<%= pkg.dest.css %>",
                src: ["*.css", ],
                dest: "<%= pkg.dest.css %>",
            },
            criticalcss: {
                expand: true,
                cwd: "<%= pkg.templates.includes %>criticalcss/",
                src: ["*.html", ],
                dest: "<%= pkg.templates.includes %>criticalcss/",
                ext: ".html"
            }
        },
        penthouse: {
            extract: {
                outfile: "<%= pkg.templates.includes %>criticalcss/hp.html",
                css: "<%= pkg.dest.css %>app.css",
                url: "http://staging.mxbry.com/"
            },
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: "<%= pkg.dest.images %>",
                    src: ["**/*.{png,jpg,svg}"],
                    dest: "<%= pkg.dest.images %>"
                }]
            }
        },
        cmq: {
            options: {
                log: true
            },
            dist: {
                files: {
                    "<%= pkg.dest.css %>": ["<%= pkg.dest.css %>**/*.css"]
                }
            }
        },
        perfbudget: {
            options: {
                key: "A.0b29f60d31dfd7bcdfe8158ec29c9cde",
                location: "ec2-eu-central-1:Chrome"
            },
            live: {
                options: {
                    url: "http://mxbry.com/",
                }
            },
            staging: {
                options: {
                    url: "http://staging.mxbry.com/",
                }
            },
        },
        'json-minify': {
          build: {
            files: "<%= pkg.dest.data %>projects.json"
          }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.loadNpmTasks("grunt-contrib-compass");

    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-penthouse');
    // grunt.loadNpmTasks('grunt-criticalcss');
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    // grunt.loadNpmTasks("grunt-webp");
    grunt.loadNpmTasks("grunt-combine-media-queries");
    grunt.loadNpmTasks("grunt-json-minify");
    // grunt.loadNpmTasks('grunt-uncss');

    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks("grunt-docco");
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks('grunt-perfbudget');

    grunt.registerTask("build", ["jshint", "concat", "uglify:dev", "compass", "cmq", "penthouse", "copy:fonts", "copy:images", "copy:markdown", "copy:devdata"]);
    grunt.registerTask("dist", ["clean", "jshint", "concat", "uglify", "compass", "cmq", "penthouse", "cssmin", "copy:fonts", "copy:markdown", "copy:livedata", "json-minify", "copy:images", "imagemin",]);
    grunt.registerTask("perf", "perfbudget:staging");
    grunt.registerTask("serve", "nodemon");

};
