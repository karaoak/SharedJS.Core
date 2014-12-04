var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

var dispatcher = require("core/dispatcher"),
    state = require("core/state");

log('User module loaded');

module.exports = Backbone.Model.extend({

    initialize: function() {
        this.helloCounter = 0;
        log('Model user is created');
    },

    sayHello: function() {
        this.helloCounter++;
        if(this.helloCounter <= 2) {
            log('NORMAL LOG: User is still happy :)');
            dispatcher.trigger('log', {msg: 'LOG BY EVENT DISPATCHER: User is still happy :)'});
            return "Hello!";
        } else if(this.helloCounter <= 4) {
            log('NORMAL LOG: User is getting irritated :~');
            state.setAlerted();
            return "You're starting to irritate me";
        } else {
            log('NORMAL LOG: User is NOT happy anymore :(');
            state.setEmergency();
            return "Stop bothering me!";
        }
    }
});