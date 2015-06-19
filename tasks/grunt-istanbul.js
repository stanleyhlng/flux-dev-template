module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-istanbul');
    grunt.config('instrument', {
        files: [
            'build/babel/**/*.js'
        ],
        options: {
            lazy: true,
            basePath: 'artifacts/instrument'
        }
    });
    grunt.config('storeCoverage', {
        options: {
            dir: 'artifacts/coverage'
        }
    });
    grunt.config('makeReport', {
        src: 'artifacts/coverage/**/*.json',
        options: {
            type: 'lcov',
            dir: 'artifacts/coverage',
            print: 'detail'
        }
    });
};
