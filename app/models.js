var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var Preference  =  new Schema ({
        role:{type: String}, 
        ivy:{type:  String},
        wr_style:{type:  String},
        industry:{type:  String},
        risklevel:{type:  String},
        sentto:{type:  String},
        tone:{type:  String}
});



var Predicttone = new Schema({
        role:{type: String}, 
        ivy:{type:  String},
        wr_style:{type:  String},
        industry:{type:  String},
        risklevel:{type:  String},
        sentto:{type:  String},
        tone:{type:  String},
        tone_string:{type: String}
});


module.exports = {
    Preference: mongoose.model('Preference', Preference),
    Predicttone: mongoose.model('Predicttone', Predicttone)
};
