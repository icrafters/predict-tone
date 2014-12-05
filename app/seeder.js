var mongoose = require('mongoose'),
    models = require('./models'),
    md5 = require('MD5');

module.exports = {
    checkAdd: function (){
        models.Preference.find({}, function(err, preferences){
            if(preferences.length === 0){
                console.log ("Adding training data");
                var  newPreference = new models.Preference(
                    {
                        role:"c_level",
                        ivy:"true",
                        wr_style:"concise",
                        industry:"finance",
                        risklevel:"7",
                        sentto:"team", 
                        tone:"3"
                    });

                    
			    newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });

			    newPreference = new models.Preference({role:"c_level", ivy:"true",wr_style:"simple",industry:"technology",risklevel:"7",sentto:"team", tone:"2"});
			    newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });


			    newPreference = new models.Preference({role:"sr_mgmt", ivy:"false",wr_style:"verbose",industry:"finance",risklevel:"8",sentto:"team", tone:"3"});
			    newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"c_level", ivy:"true",wr_style:"simple",industry:"technology",risklevel:"7",sentto:"team", tone:"2"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"sr_mgmt", ivy:"true",wr_style:"verbose",industry:"finance",risklevel:"8",sentto:"team", tone:"3"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"mid_mgmt", ivy:"true",wr_style:"concise",industry:"healthcare",risklevel:"8",sentto:"team", tone:"3"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"c_level", ivy:"true",wr_style:"simple",industry:"technology",risklevel:"7",sentto:"peer", tone:"2"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"sr_mgmt", ivy:"true",wr_style:"verbose",industry:"finance",risklevel:"8",sentto:"team", tone:"3"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"mid_mgmt", ivy:"false",wr_style:"simple",industry:"healthcare",risklevel:"5",sentto:"peer", tone:"1"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"vp", ivy:"false",wr_style:"simple",industry:"finance",risklevel:"6",sentto:"higher", tone:"2"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"c_level", ivy:"true",wr_style:"concise",industry:"finance",risklevel:"5",sentto:"higher", tone:"2"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"c_level", ivy:"true",wr_style:"simple",industry:"technology",risklevel:"7",sentto:"peer", tone:"2"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"sr_mgmt", ivy:"false",wr_style:"verbose",industry:"finance",risklevel:"4",sentto:"team", tone:"1"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"mid_mgmt", ivy:"false",wr_style:"verbose",industry:"technology",risklevel:"7",sentto:"team", tone:"2"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"sr_mgmt", ivy:"false",wr_style:"concise",industry:"finance",risklevel:"8",sentto:"higher", tone:"3"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"mid_mgmt", ivy:"true",wr_style:"concise",industry:"healthcare",risklevel:"3",sentto:"team", tone:"1"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"c_level", ivy:"true",wr_style:"simple",industry:"technology",risklevel:"7",sentto:"peer", tone:"2"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"sr_mgmt", ivy:"true",wr_style:"verbose",industry:"finance",risklevel:"8",sentto:"team", tone:"3"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"mid_mgmt", ivy:"false",wr_style:"simple",industry:"healthcare",risklevel:"5",sentto:"peer", tone:"3"});
			     newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });
			                   newPreference = new models.Preference({role:"vp", ivy:"false",wr_style:"simple",industry:"finance",risklevel:"6",sentto:"higher", tone:"1"});

			    newPreference.save(function(err, preference) {
			        console.log('successfully inserted preference: ' + preference._id);
			    });

            }
            else
            {
                console.log("found " + preferences.length + " in the DB as training data ")
            }
        });
    }
}
// module.exports = {
//     check: function() {
//         models.Contact.find({}, function(err, contacts) {
//             if (contacts.length === 0) {
//                 console.log('no contacts found, seeding...');
//                 var newContact = new models.Contact({
//                     email: 'jkat98@gmail.com',
//                     name: {
//                         first: 'Jason',
//                         last: 'Krol'
//                     },
//                     phone: '215-123-1234',
//                     gravatar: md5('jkat98@gmail.com')
//                 });
//                 newContact.save(function(err, contact) {
//                     console.log('successfully inserted contact: ' + contact._id);
//                 });

//                 newContact = new models.Contact({
//                     email: 'testerson@example.com',
//                     name: {
//                         first: 'Steve',
//                         last: 'Testerson'
//                     },
//                     phone: '215-123-1234',
//                     gravatar: md5('testerson@example.com')
//                 });
//                 newContact.save(function(err, contact) {
//                     console.log('successfully inserted contact: ' + contact._id);
//                 });

//                 newContact = new models.Contact({
//                     email: 'nancy@testerson.com',
//                     name: {
//                         first: 'Nancy',
//                         last: 'Testerson'
//                     },
//                     phone: '215-123-1234',
//                     gravatar: md5('nancy@testerson.com')
//                 });
//                 newContact.save(function(err, contact) {
//                     console.log('successfully inserted contact: ' + contact._id);
//                 });
//             } else {
//                 console.log('found ' + contacts.length + ' existing contacts!');
//             }
//         });
//     }
// };
