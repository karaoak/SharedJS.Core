var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

var dispatcher = require("core/dispatcher"),
    state = require("core/state");

log('Donkey module loaded');

module.exports = Backbone.Model.extend({

    initialize: function() {
        log('Model donkey is created');
    },

    sayHello: function() {
        state.setNormal();
        return "Iaah!";
    }
});

