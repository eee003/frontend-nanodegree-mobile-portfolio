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
    // copy: {
    //   main: {
    //     cwd: 'src',
    //     src: 'img/*.*',
    //     dest: 'dist/',
    //   },
    // },
    cssmin: {
      dist: {
        options: {
             banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
           'dist/views/css/style.min.css': ['src/views/css/**/style.css'],
           'dist/views/css/bootstrap-grid.min.css': ['src/views/css/**/bootstrap-grid.css'],
           'dist/css/style.min.css': ['src/css/**/style.css'],
           'dist/css/print.min.css': ['src/css/**/print.css']
        }
      }
    },
    // cssmin: {
    //   dist: {
    //     options: {
    //          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //     },
    //     files: {
    //        'dist/css/style.min.css': ['src/css/**/*.css']
    //     }
    //   }
    // },
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
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        // src: 'src/<%= pkg.name %>.js',
        // dest: 'build/<%= pkg.name %>.min.js'
        src: 'dist/**/*.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
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
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', [
      'jshint',
      // 'copy',
      'cssmin',
      'concat',
      'uglify', 
      'htmlmin'
  ]);

};
