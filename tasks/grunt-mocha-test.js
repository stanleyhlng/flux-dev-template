module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.config('mochaTest', {
        'test': {
            options: {
                reporter: 'spec',
                require: 'babel/register',
                timeout: 30000
            },
            src: [
                'tests/unit/**/*.spec.js*'
            ]
        }
    });
};
