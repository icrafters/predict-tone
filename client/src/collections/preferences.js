var Backbone = require('backbone'),
    PreferenceModel = require('../models/preference'),
    PredicteqModel = require('../models/predicteq');

module.exports = PreferencesCollection = Backbone.Collection.extend({
    model:  PreferenceModel,
    url: '/api/preferences'
});

