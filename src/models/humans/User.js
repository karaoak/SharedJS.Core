var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

log('User module loaded');

module.exports = Backbone.Model.extend({

    initialize: function(){
        log('Model user is created');
    },

    sayHello : function(){
        return "Hello";
    }
});