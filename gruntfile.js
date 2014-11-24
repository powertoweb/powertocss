module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // ===========================
    // LESS Task
    // ===========================
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "powertocss.css": "less/powertocss.less",
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          cleancss: true,
          compress: true,
          ieCompat: true,
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          "powertocss.min.css": "less/powertocss.less",
        }
      }
    },

    // ===================================
    // Watch Task
    // it will watch the LESS files
    // ===================================
    watch: {
        files: ("less/powertocss.less"), // this is the less path
        tasks: ["less"]
    },

  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ 'less', 'watch' ]);
};
