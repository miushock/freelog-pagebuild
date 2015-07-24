module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    copy: {
      scripts: {
        expand:true,
        cwd: './src',
        src: './*.js',
        dest: './test/scripts'
      },
      style_sheets: {
        expand:true,
        cwd: '.src',
        src: './*.css',
        dest: './test/style_sheets'
      }
    },
    build_index_page: {
      widget_html: "./src/{%=name%}.html",
      container_file: "./template/container.html",
      dest: "./test/index.html"
    },
    submit: {
      widget_html: ".src/{%=name%}.html",
      widget_style: ".src{%=name%}.css",
      widget_script: ".src{%=name%}.js"
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('freelog-widgetscript');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint']);

};
