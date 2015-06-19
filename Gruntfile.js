module.exports = function(grunt) {
    'use strict';

    var config = {
        ENV: grunt.option('env') || 'dev',
        pkg: grunt.file.readJSON('package.json'),
        workspace: process.cwd()
    };

    grunt.initConfig(config);

    grunt.loadTasks('tasks');

    grunt.registerTask('lint', [
        'eslint'
    ]);

    grunt.registerTask('cover', [
        'env:coverage',
        'clean',
        'babel',
        'instrument',
        'unit',
        'storeCoverage',
        'makeReport'
    ]);

    grunt.registerTask('unit', [
        'mochaTest'
    ]);

    grunt.registerTask('test', [
        'cover'
    ]);

    grunt.registerTask('default', [
        'clean',
        'lint',
        'unit'
    ]);
};
