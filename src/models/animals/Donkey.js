var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

log('Donkey module loaded');

module.exports = Backbone.Model.extend({

    initialize: function(){
        log('Model donkey is created');
    },

    sayHello : function(){
        return "Iaah!";
    }
});

