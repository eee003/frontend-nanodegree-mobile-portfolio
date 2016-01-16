// This is our Grunt Wrapper, this tells node we are using grunt!

module.exports = function(grunt) {

  // require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Import JSON metadata into grunt config
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'src/js/*.js']
    },
    concat: {
      dist: {
        src: 'src/js/*.js',
        dest: 'dist/js/app.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        // src: 'src/<%= pkg.name %>.js',
        // dest: 'build/<%= pkg.name %>.min.js'
        src: 'dist/js/app.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  // Default task(s).
  grunt.registerTask('default', [
      'jshint',
      'concat',
      'uglify' 
  ]);

};
