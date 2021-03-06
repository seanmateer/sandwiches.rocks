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

	uglify: {
		my_target: {
			files: {
				'dist/js/app.min.js': ['app/js/app.js']
			}
		}
	},

	watch: {
		sass: {
			files: ['app/{,*/}*.scss'],
			tasks: ['sass'],
		},
		uglify: {
			files: ['app/{,*/}*.js'],
			tasks: ['uglify'],
		}
	},

	 autoprefixer: {
		single_file: {
	      options: {
	        // Target-specific options go here.
	      },
	      src: 'dist/css/main.css',
	      dest: 'dist/css/main.css'
	    }
	},

	responsive_images: {
		myTask: {
			options: {
				sizes: [{
					width: 320
				}]
			},
			files: [{
				expand: true,
				src: ['**.{jpg,gif,png}'],
				cwd: 'downloads',
				dest: 'dist/img/'
			}]
		}
	}

  });

  grunt.registerTask('images', 'This crunches images.', ['responsive_images']);
  grunt.registerTask('default', ['sass', 'uglify','autoprefixer', 'watch']);

};
