var Marionette = require('backbone.marionette');

module.exports = AddView = Marionette.ItemView.extend({
    template: require('../../templates/add.hbs'),
    events: {
        'click a.save-button': 'save'
    },

    save: function(e) {
        e.preventDefault();
        var newPreference = {
            role: this.$el.find('input[name=role]:checked').val(),
            ivy: (this.$el.find('input[name=ivy]:checked').length>0)?"true":"false",
            wr_style: this.$el.find('input[name=wr_style]:checked').val(),
            industry: this.$el.find('#industry').val(),
            risklevel: this.$el.find('[id=risklevel]').find(':selected').val(),
            sentto: this.$el.find('input[name=sentto]:checked').val(),
        };

        window.App.data.preferences.create(newPreference);
        
        window.App.core.vent.trigger('app:log', 'Add View: Saved new Preference`!');
        window.App.controller.predicttone();
    }
});
