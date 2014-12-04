var proxy = require("proxy");

exports.set = function(key, value) {
    proxy.persist.set(key, value);
};

exports.get = function(key) {
    return proxy.persist.get(key);
};

exports.unset = function(key) {
    proxy.persist.unset(key);
};