var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

var dispatcher = require("core/dispatcher"),
    state = require("core/state");

log('Dog module loaded');

module.exports = Backbone.Model.extend({

    initialize: function() {
        log('Model dog is created');
    },

    sayHello: function() {
        state.setNormal();
        return "Woooof!";
    }
});