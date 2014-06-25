module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: ['dist', 'tmp']
    },
    jshint: {
      options: grunt.file.readYAML('jshint.yml'),
      configurations: ['Gruntfile.js', 'package.json']
    },
    less: {
      specimen: {
        files: [
          {'tmp/less/specimen.css': 'src/less/specimen.less'}
        ]
      }
    },
    release: {
      options: {
        file: 'bower.json'
      }
    },
    watch: {
      less: {
        files: 'src/less/**/*.less',
        tasks: ['less']
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('test', ['newer:jshint']);
  grunt.registerTask('build', ['clean', 'test']);
  //grunt.registerTask('site', ['clean', 'test', 'less']);
  //grunt.registerTask('deploy', ['site', 'gh-pages']);
  //grunt.registerTask('live', ['site', 'connect', 'watch']);
};
