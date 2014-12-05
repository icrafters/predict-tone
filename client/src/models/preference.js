var Backbone = require('backbone');

module.exports = PreferenceModel = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: 'api/preferences'
});
