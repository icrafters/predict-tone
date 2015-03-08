var models = require('../app/models'),
    md5 = require('MD5'),
    DecisionTree = require('decision-tree'),
    fs =  require("fs");

var training_data,
	test_data = {},
	class_name = "tone",
	features = ["role", "ivy","wr_style","industry","risklevel","sentto"],
	predicted_class="NaN";

module.exports = {

    index: function(req, res) {
        getTrainingData();

        var preference = new models.Preference();
    
        preference.role = req.body["role"];
 		preference.ivy = req.body["ivy"];
		preference.wr_style = req.body["wr_style"];
		preference.industry = req.body["industry"];
		preference.risklevel = req.body["risklevel"];
		preference.sentto = req.body["sentto"];

       
        var tone = this.predictTone (preference,training_data);
        
        preference["tone"] = tone;
       
        var predicttone = new models.Predicttone();
        predicttone.role =  preference.role;
        predicttone.ivy = preference.ivy;
        predicttone.wr_style = preference.wr_style ;
        predicttone.industry = preference.industry;
        predicttone.risklevel = preference.risklevel;
        predicttone.sento = preference.sentto;
        predicttone.tone = preference["tone"];
        switch (predicttone["tone"]){
            case "1":
                predicttone["tone_string"]="Mellow";
                break;
            case "2":
                predicttone["tone_string"]="Cordial";
                break;
            case "3":
                predicttone["tone_string"] ="Strong";
                break;

        }
        res.json(predicttone);
    },

};


predictTone = function (predicttone, training_data){
		//use the data in the DB and train the id3 algo.
    	
        var dt= new DecisionTree(training_data, class_name, features);
    	
		  //    predicted_class = dt.predict({
		  //     role: predicttone.role,
		  //     ivy: predicttone.ivy,
		  //     wr_style:predicttone.wr_style,
		  //     industry:predicttone.industry,
		  //     risklevel:predicttone.risklevel,
		  //     sentto:predicttone.sentto
		  // });

		predicted_class = dt.predict({
		      role: predicttone["role"],
		      ivy: predicttone["ivy"],
		      wr_style:predicttone["wr_style"],
		      industry:predicttone["industry"],
		      risklevel:predicttone["risklevel"],
		      sentto:predicttone["sentto"]
		});
		var accuracy = dt.evaluate(test_data);

     	var treeModel = dt.toJSON();
     	console.log("predicted_class:"+predicted_class);    	
     	return predicted_class;
};




getTrainingData =  function (){
    fs.readFile('app/data.js', 'utf8', function (err, data) {
      if (err) throw err;
      training_data = test_data = JSON.parse(data);
    });

};

setEmailMessage  =  function (predicttone, req){
    
    
};