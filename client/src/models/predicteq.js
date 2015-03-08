var Backbone = require('backbone');

module.exports = PredicteqModel = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: 'api/predicteq'
});
