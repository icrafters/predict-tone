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
            mood: this.$el.find('input[name=mood]:checked').val(),
            terms: this.$el.find('#terms1').val()+"|"+ this.$el.find('#terms3').val()+"|"+ this.$el.find('#terms3').val()
        };

        window.App.data.preferences.create(newPreference, {
		    wait : true, 
		    success : function(resp){
		    	console.log('success callback');
		    	console.log(resp);
		    	//jQuery.parseJSON(xhr.responseText)
		    	window.App.data.predictTone = resp;
		    	window.App.controller.predicttone();
		    },error : function(err) {
		    	console.log('error callback');
		    	alert('There was an error. See console for details');
		    	console.log(err);
		    }
		});
        
        window.App.core.vent.trigger('app:log', 'Add View: Saved new Preference`!');
        //	window.App.controller.predicttone();
    }
});
