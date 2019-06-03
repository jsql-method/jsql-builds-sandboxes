/*
 * Copyright (c) 2017-2019 JSQL Sp. z.o.o. (Ltd, LLC) www.jsql.it
 * See LICENSE or https://jsql.it/public-packages-license
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        jsql: {
            target: {
                options: {
                    apiKey: 'dawid.senko@jsql.it',
                    src: 'test/test.js',
                    dist: 'test/dist/test.min.js',
                    devKeyFileName: 'test-key.key',
                    debug: true,
                    env: 'local'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-jsql');

    grunt.registerTask('test', ['jsql']);

};
