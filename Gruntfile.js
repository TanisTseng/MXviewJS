'use strict';

module.exports = function(grunt)
{
	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			dist:{
				files:{
					'bundle.js':['src/*.js']
				}
			}

		},

		karma:{
			unit:{
				configFile: 'karma.conf.js'
			}
		},

		uglify:{
			options:{
				mangle: false
			},
			dist:{
				files:{
					'mxview.min.js' : ['bundle.js']
				}
			}
		},

		watch: {
			dev:{
				files: ['Gruntfile.js', 'src/*.js', 'src/*.html'],
				tasks: ['karma'],
				options:{
					atBegin:true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('test', ['watch']);
	grunt.registerTask('default', ['browserify', 'uglify']);
}