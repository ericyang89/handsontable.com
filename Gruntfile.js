module.exports = function (grunt) {

  grunt.initConfig({
    bowerJson: grunt.file.readJSON('bower.json'),
    ruleJS: {

    },
    pages: {
      posts: {
        src: 'posts',
        dest: 'dist',
        layout: 'src/layouts/post.jade',
        url: 'posts/:title/',
        options: {
          pageSrc: 'src/pages',
          data: {
            hotVersion: '<%= bowerJson.dependencies.handsontable %>',
            baseUrl: '/'
          },
          pagination: {
            postsPerPage: 2,
            listPage: 'src/pages/index.jade'
          }
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'src/styles',
          cssDir: 'dist/styles'
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          dest: 'dist',
          src: [
            '*.ico',
            'images/**',
            '*.html',
            'scripts/**',
            'styles/**.css',
            'styles/fonts/**',
            'bower_components/**/*.js'
          ]
        }]
      }
    },
    bowercopy: {
      options: {
          srcPrefix: 'bower_components'
      },
      scripts: {
          options: {
              destPrefix: 'dist/bower_components'
          },
          files: {
              'jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
              'foundation': 'foundation',
              'font-awesome': 'font-awesome',
              'fastclick': 'fastclick',
              'jquery.cookie': 'jquery.cookie',
              'jquery-placeholder': 'jquery-placeholder',
              'modernizr': 'modernizr',
              'handsontable': 'handsontable',
              'pikaday': 'pikaday',
              'moment': 'moment',
              'chroma-js': 'chroma-js',
              'ruleJS': 'ruleJS',
              'handsontable-ruleJS': 'handsontable-ruleJS'
          }
      }
    },
    robotstxt: {
      dist: {
        dest: 'dist/',
        policy: [
          {
            ua: '*',
            allow: '/',
            disallow: ['/bower_components/*', '/scripts/*', '/styles/*', '/page/*', '/posts/*']
          },
          {
            sitemap: ['http://handsontable.com/sitemap.xml']
          },
          {
            host: 'www.handsontable.com'
          }
        ]
      }
    },
    sitemap: {
      dist: {
        pattern: ['dist/*.html', '!dist/40*.html', '!dist/_*.html'],
        siteRoot: 'dist/'
      }
    },
    watch: {
      pages: {
        files: [
          'posts/**',
          'src/layouts/**',
          'src/pages/**'
        ],
        tasks: ['pages']
      },
      compass: {
        files: ['src/styles/**'],
        tasks: ['compass']
      },
      copy: {
        files: [
          'src/*.ico',
          'src/images/**',
          'src/scripts/**',
          'src/styles/**.css',
          'src/styles/fonts/**'
        ],
        tasks: ['copy']
      },
      dist: {
        files: ['dist/**'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      dist: {
        options: {
          port: 5455,
          hostname: '0.0.0.0',
          base: 'dist',
          livereload: true
        }
      }
    },
    open: {
      dist: {
        path: 'http://localhost:5455'
      }
    },
    clean: {
      dist: 'dist'
    }
  });

  grunt.registerTask('build', [
    'clean',
    'pages',
    'compass',
    'copy',
    'bowercopy',
    'robotstxt:dist',
    'sitemap'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'open',
    'watch'
  ]);

  grunt.registerTask('default', 'server');

  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-pages');
  grunt.loadNpmTasks('grunt-robots-txt');
  grunt.loadNpmTasks('grunt-sitemap');
};
