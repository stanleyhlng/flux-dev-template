module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-babel');
    grunt.config('babel', {
        options: {
            modules: 'common',
            sourceMap: 'both'
        },
        src: {
            files: [
                {
                    expand: true,
                    cwd: 'src/',
                    src: [
                        '**/*.jsx'
                    ],
                    dest: 'build/babel/src/',
                    ext: '.js'
                }
            ],
        }
    });
};
