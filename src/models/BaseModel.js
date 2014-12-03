var proxy = require("proxy"),
    helpers = require("core/utils/helpers");

var Backbone = proxy.backbone,
    log = proxy.logger;

module.exports = Backbone.Model.extend({

    logging: false,
    logging_prefix: false,
    logging_prefix_suffix: 'BaseModel',

    log: helpers.log

});