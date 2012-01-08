var config = require('./config.json');

var router = require('router').create();
var consumerkey = require('./consumerkey');
var apis = require('./apis');
var routes = require('./routes');

function init() {
  consumerkey.init();
  routes.setup(router, apis);
  router.listen(config.LISTEN_PORT);
}

init();