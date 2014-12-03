var proxy = require("proxy");

var _ = proxy._,
    log = proxy.logger;

exports.log = function(msg) {
    if(this.logging) {
        if(this.logging_prefix && (_.isString(msg) || _.isNumber(msg))) {
            log(this.logging_prefix + ' ' + this.logging_prefix_suffix + ': ' + msg);
        } else {
            if(this.logging_prefix) window.console.log(this.logging_prefix + ' ' + this.logging_prefix_suffix + ': ');
            log(msg);
        }
    }
};