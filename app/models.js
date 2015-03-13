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
        tone:{type:  String},
        education: {type: String},
        author: {type: String},
        sm_frequency_score: {type: String}
});

var Predicteq  =  new Schema ({
        eq1:{type: String}, 
        eq2:{type:  String},
        eq3:{type:  String},
        eq4:{type:  String},
        eq5:{type:  String},
        eq6:{type:  String},
        eq7:{type:  String},
        equotient:{type:  String}
});

var Predicttone = new Schema({
        role:{type: String}, 
        ivy:{type:  String},
        wr_style:{type:  String},
        industry:{type:  String},
        risklevel:{type:  String},
        sentto:{type:  String},
        tone:{type:  String},
        tone_string:{type: String},
        education: {type: String},
        author: {type: String},
        sm_frequency_score: {type: String}
});


module.exports = {
    Preference: mongoose.model('Preference', Preference),
    Predicttone: mongoose.model('Predicttone', Predicttone),
    Predicteq: mongoose.model('Predicteq', Predicteq)
};
