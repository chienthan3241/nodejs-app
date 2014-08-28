module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					includePaths: require('node-bourbon').includePaths
				},
				files: {
					'public/stylesheets/style.css' : 'sass/application.scss'
				}
			}
		},

		watch: {
		  source: {
		    files: ['sass/**/*.scss', 'views/**/*.jade'],
		    tasks: ['sass'],
		    options: {
		      livereload: true, // needed to run LiveReload
		    }
		  }
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.registerTask('default', ['sass']);
	grunt.loadNpmTasks('grunt-contrib-watch');
};