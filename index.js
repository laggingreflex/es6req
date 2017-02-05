module.exports = function es6req(path) {
  var module = require(path);
  return module.default || module;
}
