// This is our Grunt Wrapper, this tells node we are using grunt!

module.exports = function(grunt) {

  // require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Import JSON metadata into grunt config
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'src/js/**/*.js']
    },
    cssmin: {
      dist: {
        files: {
          // 'dist/css/style.min.css': ['src/css/**/*.css']
           'dist/views/css/style.min.css': ['src/views/css/**/style.css'],
           'dist/views/css/bootstrap-grid.min.css': ['src/views/css/**/bootstrap-grid.css'],
           'dist/css/style.min.css': ['src/css/**/style.css'],
           'dist/css/print.min.css': ['src/css/**/print.css']
        }
      }
    },
    copy: {
      // copy compressed main page images to dist
      main: {
        expand: true,
        cwd: 'src/',
        src: 'img/*.webp',
        dest: 'dist/',
        filter: 'isFile',
      },
      // copy compressed pizza images for pizza.html to dist
      pizza: {
        expand: true,
        cwd: 'src/views',
        src: 'images/*.webp',
        dest: 'dist/views/',
        filter: 'isFile',
      },
    },
    concat: {
      // dist: {
      //   src: 'src/js/*.js',
      //   dest: 'dist/js/app.js'
      // }
      dist: {
        expand: true,
        cwd: 'src',
        src: '**/*.js',
        dest: 'dist/'
        }
    },
    uglify: {
      options: {
        // banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        banner: '/*! FEND: P4 <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      // Minimize the perfmatters.js file 
      main: {
        // src: 'src/<%= pkg.name %>.js',
        // dest: 'build/<%= pkg.name %>.min.js'
        src: 'src/js/perfmatters.js',
        dest: 'dist/js/perfmatters.js'
      },
      // Minimize the main.js file used by pizza.html
      views: {
        // src: 'src/<%= pkg.name %>.js',
        // dest: 'build/<%= pkg.name %>.min.js'
        src: 'src/views/js/main.js',
        dest: 'dist/views/js/main.js'
      },
    },
    // Minify all html files.
    htmlmin: {
      dist: {
         options: {
           removeComments: true,
            collapseWhitespace: true
         },
         files: [{
           expand: true,
           cwd: 'src',
           src: '**/*.html',
           dest: 'dist/'
          }]
       }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', [
      'jshint',
       'copy',
      'cssmin',
      'concat',
      'uglify', 
      'htmlmin'
  ]);
};
