module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-coveralls');
    grunt.config('coveralls', {
        options: {
            // When true, grunt-coveralls will only print a warning rather than
            // an error, to prevent CI builds from failing unnecessarily (e.g. if
            // coveralls.io is down). Optional, defaults to false.
            force: false
        },
        coverage: {
            src: '<%= workspace %>/artifacts/coverage/lcov-transformed.info'
        }
    });
};
