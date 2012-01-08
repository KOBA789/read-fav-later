module.exports.setup = function (router, apis) {
  router.get('/', function(req, res) {
    res.writeHead(200);
    var result = { message: 'Welcome to Read Fav Later!' };
    res.end(JSON.stringify(result));
  });
  
  router.get('/authorize', apis.authorize.index);
  router.get('/callback', apis.callback.index);
  
  router.get('/statuses', apis.status.index);
  router.get('/statuses/{item}', apis.status.show);

  router.get('/filters', apis.filters.index);
  router.get('/filters/{filter}', apis.filters.index);
};