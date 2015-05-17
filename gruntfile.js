module.exports = function(grunt) {

// Load grunt tasks automatically
require('load-grunt-tasks')(grunt);

grunt.initConfig({

  sass: {
    dist: {
      files: {
        'dist/css/main.css': 'app/scss/main.scss'
      }
    }
  },

 responsive_images: {
    myTask: {
      options: {
        sizes: [{
          width: 400,
          suffix: ""
        }]
      },
      files: {
        'dist/images/test.jpg': 'downloads/Baconbutty.jpg'
      }
    }
  }

});

grunt.registerTask('default', ['sass', 'responsive_images']);

};


