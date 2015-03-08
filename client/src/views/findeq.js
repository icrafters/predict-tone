var Marionette = require('backbone.marionette');

module.exports = FindEQView = Marionette.ItemView.extend({
    template: require('../../templates/findeq.hbs'),
    events: {
        'click a.predict-eq-button': 'predicteq'
    },

    predicteq: function(e) {
        e.preventDefault();
        var equotient = {
            eq1: this.$el.find('input[name=eq1]:checked').val(),
            eq2: this.$el.find('input[name=eq2]:checked').val(),
            eq3: this.$el.find('input[name=eq3]:checked').val(),
            eq4: this.$el.find('input[name=eq4]:checked').val(),
            eq5: this.$el.find('input[name=eq5]:checked').val(),
            eq6: this.$el.find('input[name=eq6]:checked').val(),
            eq7: this.$el.find('input[name=eq7]:checked').val()
        };

        window.App.data.predicteq.save(equotient, {
		    wait : true, 
		    success : function(resp){
		    	console.log('success callback');
		    	console.log(resp);
		    	//jQuery.parseJSON(xhr.responseText)
		    	window.App.data.predicteq = resp;
		    	//window.App.controller.predicttone();
		    	window.App.controller.add();
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
