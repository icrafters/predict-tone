var Marionette = require('backbone.marionette'),
    ContactsView = require('./views/contacts'),
    PredictToneView = require('./views/predict_tone'),
    AddPreferenceView = require('./views/add'),
    PreferencesView = require('./views/preferences_list');

module.exports = Controller = Marionette.Controller.extend({
    initialize: function() {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
       // window.App.views.contactsView = new ContactsView({ collection: window.App.data.contacts });
       window.App.views.preferencesView = new PreferencesView({ model: window.App.data.preferences });
    },

    home: function() {
        App.core.vent.trigger('app:log', 'Controller: "Home" route hit.');
        //var view = window.App.views.contactsView;
        var view = window.App.views.preferencesView;
        this.renderView(view);
        //window.App.router.navigate('#add');
    },

    predicttone: function() {
        App.core.vent.trigger('app:log', 'Controller: "Predict Tone" route hit.');
        //var view = window.App.views.contactsView;
        //window.App.views.predictToneView = new PredictToneView({model: window.App.data.predictTone});
        //App.data.predictTone =;
        var view = new PredictToneView({model: window.App.data.predictTone});
        
        this.renderView(view);
        //window.App.router.navigate('#add');
    },


    add: function() {
        App.core.vent.trigger('app:log', 'Controller: "AddPreferenceView" route hit.');
        var view = new AddPreferenceView();
        this.renderView(view);
        window.App.router.navigate('/');
    },

    renderView: function(view) {
        this.destroyCurrentView(view);
        App.core.vent.trigger('app:log', 'Controller: Rendering new view.');
        $('#js-boilerplate-app').html(view.render().el);
    },

    destroyCurrentView: function(view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    }
});

