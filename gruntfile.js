module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'documentation/core-engine/declarations/com/zhekasmirnov/**/*.d.ts',
          'documentation/core-engine/declarations/*.d.ts'
        ],
        dest: 'documentation/core-engine/headers/core-engine.d.ts'
      },
      options: {
        banner: '/// <reference path="./android.d.ts"/>\n\n'
      }
    },

    typedoc: {
      build: {
        options: {
          out: './docs/api/',
          name: 'Core Engine API',
          readme: './README.md',
          theme: 'default',
          'validation.invalidLink': true,
          entryPoints: ['./documentation/core-engine/headers/core-engine.d.ts'],
          'sourcefile-url-prefix': 'https://github.com/mineprogramming/innercore-docs/blob/gh-pages/headers/',
        }
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: 'documentation/core-engine/headers/*',
            dest: 'docs/headers'
          },
          {
            expand: true,
            src: 'README.md',
            dest: 'docs/en'
          },
          {
            expand: true,
            src: 'README.md',
            dest: 'docs'
          },
          {
            expand: true,
            src: 'changelog.md',
            cwd: 'docs/en/page/apps/innercore',
            dest: 'docs/ru/page/apps/innercore'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-typedoc');
  grunt.registerTask('docs_api', ['concat', 'typedoc', 'copy']);
  grunt.registerTask('copyf', ['copy']);
};
