module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-shell');
    grunt.config('shell', {
        'transform-coverage': {
            command: [
            'node transform-coverage.js build/babel/src/js/components/HelloMessage.js.map artifacts/coverage/lcov.info > artifacts/coverage/lcov-transformed.info'
            ]
            .join('&&')
        }
    });
};
