var Marionette = require('backbone.marionette');

module.exports = Router = Marionette.AppRouter.extend({
    appRoutes: {
        ''  : 'home',
        'add': 'add',
        'findeq': 'findeq',
        'predicteq': 'predicteq',
        'predicttone' : 'predicttone'
    }
});
