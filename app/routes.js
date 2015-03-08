var home = require('../controllers/home'),
    //contacts = require('../controllers/contacts'),
    preferences  =  require ('../controllers/preferences'),
    predicttone  =  require ('../controllers/predicttone'),
    predicteq  =  require ('../controllers/predicteq');

module.exports.initialize = function(app) {
    app.get('/', home.index);

    app.get('/api/preferences', preferences.index);
    app.post('/api/preferences', predicttone.index);
    app.post('/api/predicteq', predicteq.index);

    
};
