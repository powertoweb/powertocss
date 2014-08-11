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
          "css/powertocss.css": "@dev/css/powertocss.less",
          "css/standard-theme.css": "@dev/css/standard-theme.less",
          "starter-kit/css/powertocss.css": "@dev/css/powertocss.less",
          "starter-kit/css/standard-theme.css": "@dev/css/standard-theme.less",
          "starter-kit/css/your-theme.css": "@dev/css/your-theme.less",
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
          "css/powertocss.min.css": "@dev/css/powertocss.less",
          "css/standard-theme.min.css": "@dev/css/standard-theme.less",
          "starter-kit/css/powertocss.min.css": "@dev/css/powertocss.less",
          "starter-kit/css/standard-theme.min.css": "@dev/css/standard-theme.less",
        }
      }
    },

    // ===================================
    // Harp Task
    // ===================================
    harp: {
      server: {
        //server: true,
        source: '@dev'
      },
      dist: {
        source: '@dev',
        dest: 'build'
      }
    },

    // ===================================
    // Watch Task - run separatly without the server
    // it will watch the LESS files
    // command to run "grunt watch"
    // ===================================
    watch: {
        files: ("@dev/css/powertocss.less", "@dev/css/standard-theme.less", "@dev/css/your-theme.less"), // this is the less path
        tasks: ["less"]
    }


  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-harp');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ 'less', 'harp' ]);
};