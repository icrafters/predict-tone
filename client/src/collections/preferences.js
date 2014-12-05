var Backbone = require('backbone'),
    PreferenceModel = require('../models/preference');

module.exports = PreferencesCollection = Backbone.Collection.extend({
    model:  PreferenceModel,
    url: '/api/preferences'
});
