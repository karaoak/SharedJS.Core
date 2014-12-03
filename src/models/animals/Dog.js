var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

log('Dog module loaded');

module.exports = Backbone.Model.extend({

    initialize: function(){
        log('Model dog is created');
    },

    sayHello : function(){
        return "Woef!";
    }
});