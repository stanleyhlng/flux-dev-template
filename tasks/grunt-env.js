module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-env');
    grunt.config('env', {
        'coverage': {
            COVERAGE: true,
            COVERAGE_DIR_INSTRUMENT: 'artifacts/instrument/build/babel/'
        }
    });
};
