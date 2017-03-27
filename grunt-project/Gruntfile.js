module.exports = function(grunt) {

    /*
    grunt.registerTask('speak', function() {
        console.log("I'm speaking...");
    });
    grunt.registerTask('yell', function() {
        console.log("I'm yelling...");
    });
    grunt.registerTask('default', ['speak', 'yell']);
    */

    // Project configuration
    grunt.initConfig({
        concat: {
            js: {
              src: ['js/script1.js', 'js/script2.js'],
              dest: 'build/js/scripts.js',
            },
            css: {
                src: ['css/main.css', 'css/theme.css'],
                dest: 'build/css/styles.css',
            },
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch']);
};
