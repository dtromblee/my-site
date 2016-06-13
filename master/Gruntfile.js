module.exports = function(grunt) {
// Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
            {
                src: '/public_html/assets/lib/*',
                dest: '/dest/vendor.min.js'
            }
        }
    },
    jshint: {
        files: ['Gruntfile.js', 'public_html/app/**/*.js'],
        options: {
            globals: {
                jQuery: false,
                angular: false
            }
        }
    }
});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
grunt.registerTask('default', ['jshint']);
grunt.registerTask('hint', ['jshint']);
grunt.registerTask('uglify', ['uglify']);
};
