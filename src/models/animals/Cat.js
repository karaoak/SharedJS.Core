var proxy = require("proxy");

var BaseModel = require("core/models/BaseModel");

var dispatcher = require("core/dispatcher"),
    state = require("core/state");

module.exports = BaseModel.extend({

    logging: true,
    logging_prefix: 'Cat',
    self: this,

    initialize: function() {
        this.log('Model is created');
    },

    sayHello: function() {
        this.log('sayHello');
        state.setNormal();
        return "Miaauw!";
    }
});

