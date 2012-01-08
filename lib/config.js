module.exports.set = function (config) {
  for (var key in config) {
    module.exports[key] = config[key];
  }
};