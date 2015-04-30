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
    xml_sitemap: {
      default_options: {
        options: {
          changefreq: 'weekly',
          dest: 'dist/',
          fileName: 'sitemap',
          siteRoot: 'http://handsontable.com/',
          lastMod: '2015-02-25',
          priority: '0.8'
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: [
              '*.html',
              '!_*.html'
            ]
          }
        ]
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
      dist: 'dist',
      release: ['dist', 'node_modules', 'bower_components']
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'pages',
    'compass',
    'copy',
    'bowercopy',
    'robotstxt:dist',
    'xml_sitemap:default_options'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'open',
    'watch'
  ]);

  grunt.registerTask('default', 'server');
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-robots-txt');
  grunt.loadNpmTasks('grunt-xml-sitemap');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
};
