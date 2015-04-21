
module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    production: {
      servers: '142.4.202.189',
      workspace: '/tmp/handsontable.com',
      deployTo: '/home/httpd/handsontable.com',
      repositoryUrl: 'https://github.com/handsontable/handsontable.com.git',
      branch: 'develop',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 3,
      shallowClone: true
    }
  });

  shipit.on('published', function() {
    var current = shipit.config.deployTo + '/current';

    shipit.remote('cd ' + current + ' && npm install && bower install --config.interactive=false && grunt build');
  });
};
