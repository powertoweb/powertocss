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
          "@dev/starter-kit/css/powertocss.css": "@dev/css/powertocss.less",
          //"@dev/starter-kit/css/standard-theme.css": "@dev/css/standard-theme.less",
          "@dev/starter-kit/css/your-theme.css": "@dev/css/your-theme.less",
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
          "@dev/starter-kit/css/powertocss.min.css": "@dev/css/powertocss.less",
          //"@dev/starter-kit/css/standard-theme.min.css": "@dev/css/standard-theme.less",
        }
      }
    },

    // ===================================
    // Harp Task - run separatly with "grunt harp"
    // ===================================
    harp: {
      server: {
        //server: true, //Comment this to compile and uncomment to run the server
        source: '@dev'
      },
      dist: {
        source: '@dev',
        dest: 'build'
      }
    },

    // ==================================
    // Copy Task
    // will copy the less files to the Starter Kit
    // ==================================
    copy: {
      main: {
        expand: true, cwd: '@dev/css/', src: ['**'], dest: '@dev/starter-kit/less'
      },
    },

    // =======================================
    // compress Task
    // =======================================
    compress: {
      main: {
        options: {
          archive: '@dev/starter-kit.zip'
        },
        files: [
          //{src: ['starter-kit/*'], dest: 'internal_folder/', filter: 'isFile'}, // includes files in path
          //{src: ['starter-kit/**'], dest: 'internal_folder2/'}, // includes files in path and its subdirs
          //{expand: true, cwd: 'starter-kit/', src: ['**'], dest: 'internal_folder3/'}, // makes all src relative to cwd
          {expand: true, cwd: '@dev/starter-kit/', src: ['**'], dest: './'}, // makes all src relative to cwd
          //{flatten: true, src: ['@dev/starter-kit/**'], dest: '/', filter: 'isFile'} // flattens results to a single level
        ]
      }
    },

    // ===================================
    // Watch Task
    // it will watch the LESS files
    // ===================================
    watch: {
        files: ("@dev/css/powertocss.less", "@dev/css/standard-theme.less", "@dev/css/your-theme.less"), // this is the less path
        files: ("@dev/starter-kit/**"), // watch files to compress
        files: ("@dev/css/**"), // watch files to copy
        tasks: ["less", "compress", "copy"]
    },

  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-harp');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', [ 'less', 'copy', 'compress', 'watch' ]);
};
