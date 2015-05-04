
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
      rsync: ['--force', '--delete', '--delete-excluded', '-I', '--stats', '--chmod=ug=rwX,o=r'],
      keepReleases: 3,
      shallowClone: false
    }
  });

  shipit.task('test', function() {
    shipit.remote('pwd');
  });

  shipit.on('published', function() {
    var current = shipit.config.deployTo + '/current';

    shipit.remote('cd ' + current + ' && npm install --production').then(function() {
      return shipit.remote('cd ' + current + ' && bower install --config.interactive=false -F');

    }).then(function() {
      return shipit.remote('cd ' + current + ' && grunt build');
    });
  });
};
