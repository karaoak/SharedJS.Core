var proxy = require("proxy");

var Backbone = proxy.backbone,
    log = proxy.logger;

module.exports = Backbone.Collection.extend({

    logging: false,
    logging_prefix: false,
    logging_prefix_suffix: 'BaseCollection',

    setSelected: function(model) {
        var selectedModel = this.getSelected();
        if (selectedModel === model) return;
        if (selectedModel) selectedModel.set("selected", false);
        model.set("selected", true);
    },

    clearSelected: function() {
        var selectedModel = this.getSelected();
        if (selectedModel) selectedModel.set("selected", false);
    },

    getSelected: function() {
        return this.find(function(model) {
            return model.get("selected");
        });
    },

    getModelById: function(id) {
        return this.find(function(model){ return model.get('id')==id; });
    }
});