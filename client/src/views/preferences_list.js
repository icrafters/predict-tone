var Marionette = require('backbone.marionette');

var itemView = Marionette.ItemView.extend({
    template: require('../../templates/preference_list.hbs'),
    initialize: function() {
        //this.listenTo(this.model, 'change', this.render);
    },/*
    events: {
        'click': 'showDetails'
    },*/

    /*showDetails: function() {
        window.App.core.vent.trigger('app:log', 'Contacts View: showDetails hit.');
        window.App.controller.details(this.model.id);
    }*/
});

module.exports = PreferencesView = itemView;

/*module.exports = CollectionView = Marionette.CollectionView.extend({
    initialize: function() {
        //this.listenTo(this.collection, 'change', this.render);
    },
    itemView: itemView
});
*/  