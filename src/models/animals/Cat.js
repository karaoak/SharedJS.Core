var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

log('Cat module loaded');

module.exports = Backbone.Model.extend({

    initialize: function(){
        log('Model cat is created');
    },

    sayHello : function(){
        return "Miaauw!";
    }
});

