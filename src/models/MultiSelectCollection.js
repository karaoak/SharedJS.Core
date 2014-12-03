var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

module.exports = Backbone.Collection.extend({

    logging: false,
    logging_prefix: false,
    logging_prefix_suffix: 'MultiSelectCollection',

    setSelected: function(model) {
        model.set('selected', !model.get('selected'));
    },

    getSelected: function() {
        return this.filter(function(model) {
            return model.get('selected');
        });
    },

    selectAll: function() {
        this.each(function(model) {
            model.set('selected', true);
        }, this);
    },

    deselectAll: function() {
        this.each(function(model) {
            model.set('selected', false);
        }, this);
    },

    noneSelected: function() {
        if (this.length===0) {
            return true;
        }

        return !this.any(function(model) {
            return model.get('selected');
        }, this);
    },

    allSelected: function() {

        if (this.length===0) {
            return false;
        }

        return this.every(function(model) {
            return model.get('selected');
        }, this);
    }

});