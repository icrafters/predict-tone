var Marionette = require('backbone.marionette');

module.exports = PredictTone = Marionette.ItemView.extend({
    template: require('../../templates/predict_tone.hbs'),
    events: {
        'click a.back': 'goBack',
        /*'click a.delete': 'deleteContact'*/
    },

    goBack: function(e) {
        e.preventDefault();
        window.App.controller.home();
    },
   
});
