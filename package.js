Package.describe({
  summary: 'Routing for Meteor'
});

Package.on_use(function (api) {
  api.use([
    'deps',
    'underscore',
    'handlebars',
    'posture',
    'controller'
  ], 'client');

  api.add_files([
    'lib/route_path.js',
    'lib/route_context.js',
    'lib/route.js',
    'lib/router.js'
  ], ['client', 'server']);

  api.add_files([
    'lib/client/route_controller.js',
    'lib/client/client_router.js',
  ], 'client');

  api.add_files([
    'lib/server/server_router.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use('router', 'client');
  api.use('reactive-dict', 'client');
  api.use('tinytest', 'client');
  api.use('test-helpers', 'client');
  api.add_files('test/router_tests.js', 'client');
});
