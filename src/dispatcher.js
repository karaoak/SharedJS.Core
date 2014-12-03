var proxy = require("proxy");

var _ = proxy._,
    Backbone = proxy.backbone;

var _events = [];

module.exports = _.clone(Backbone.Events);