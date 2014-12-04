var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

log('Mule module loaded');

module.exports = Backbone.Model.extend({

    initialize: function() {
        log('Model Mule is created');
    },

    sayHello: function() {
        return "Iaahihi!";
    }
});

