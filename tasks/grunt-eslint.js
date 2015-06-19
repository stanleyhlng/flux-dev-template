module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-eslint');

    grunt.config('eslint', {
        options: {
            configFile: '.eslintrc',
            rulePaths: [
                'node_modules/eslint-plugin-import/lib/rules',
                'node_modules/eslint-plugin-mocha/lib/rules',
                'node_modules/eslint-plugin-react/lib/rules'
            ]
        },
        all: [
            'src/js/**/*.jsx',
            'src/js/**/*.js'
        ]
    });
};
