var Keychain = require('./schemata').Keychain;

var noop = function () {};

module.exports.init = function (name, callback) {
  name = name || 'default';
  Keychain.findOne({ name: name }, function (err, keychains) {
    if (err) { throw err; }
    module.exports.key = keychains.key;
    module.exports.secret = keychains.secret;
    process.nextTick(callback || noop);
  });
};

module.exports.tie = function (name, key, secret) {
  var keychain = new Keychain({
    name: name,
    key: key,
    secret: secret
  });

  keychain.save(function (err) {
    if (err) { throw err; }
  });
};

module.exports.key = '';
module.exports.secret = '';