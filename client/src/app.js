var Marionette = require('backbone.marionette'),
    Controller = require('./controller'),
    Router = require('./router'),
    PreferenceModel = require('./models/preference'),
    PreferencesCollection = require('./collections/preferences'),
    PredicttoneModel = require ('./models/predicttone'),
    PredicteqModel =  require ('./models/predicteq');

module.exports = App = function App() {};

App.prototype.start = function(){
    App.core = new Marionette.Application();

    App.core.on("initialize:before", function (options) {
        App.core.vent.trigger('app:log', 'App: Initializing');

        App.views = {};
        App.data = {};

        console.log('In App start');
        // load up some initial data:
        var preferences = new PreferencesCollection();
        var predicteq = new PredicteqModel();
        
        App.data.predicteq =  predicteq;
        preferences.fetch({
            success: function() {
                console.log('In App start-success');
                App.data.preferences = preferences;
                App.core.vent.trigger('app:start');
            }
        });

    });

    App.core.vent.bind('app:start', function(options){
        App.core.vent.trigger('app:log', 'App: Starting');
        if (Backbone.history) {
            console.log('In App start-success');
            App.controller = new Controller();
            App.router = new Router({ controller: App.controller });
            App.core.vent.trigger('app:log', 'App: Backbone.history starting');
            Backbone.history.start();
        }

        //new up and views and render for base app here...
        App.core.vent.trigger('app:log', 'App: Done starting and running!');
    });

    App.core.vent.bind('app:log', function(msg) {
        console.log(msg);
    });

    App.core.start();
};
