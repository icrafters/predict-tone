var models = require('../app/models'),
    md5 = require('MD5'),
    //NodeCache =  require('node-cache'),
	DecisionTree = require('decision-tree');

var training_data,
	test_data = {},
	class_name = "tone",
	features = ["role", "ivy","wr_style","industry","risklevel","sentto"],
	predicted_class="NaN";

module.exports = {

    index: function(req, res) {

        getTrainingData();
        var predicttone = new models.Predicttone();

        predicttone.role = req.body["role"];
 		predicttone.ivy =req.body["ivy"];
		predicttone.wr_style=req.body["wr_style"];
		predicttone.industry=req.body["industry"];
		predicttone.risklevel=req.body["risklevel"];
		predicttone.sentto=req.body["sentto"];

        var tone = this.predictTone (predicttone,training_data);
        predicttone["tone"] = tone;
        predicttone.save(function(err, preference) {
            if (err) {
                res.json({error: 'Error adding preference.'});
            } else {
            	console.log("saved preferences; add tone_string and return in response")
            	switch (predicttone["tone"]){
            		case "1":
            			predicttone["tone_string"]="Mellow";
            			break;
            		case "2":
            			predicttone["tone_string"]="cordial";
            			break;
            		case "3":
            			predicttone["tone_string"] ="Strong";
            			break;

            	}
            	res.json(predicttone);
            	
            }
        });
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
    // myCache = new NodeCache( { stdTTL: 1000, checkperiod: 120 } );
    // console.log(myCache.getStats());
    // myCache.get("training_data", function( err, value ){
    //   if( !err && Object.keys(value).length>0) {
    //     console.log( value );
    //     training_data=value;
      
    //   }
    //   else {
        var query = models.Preference.find({});
        query.sort({tone:-1, risklevel:-1});
        query.exec(function(err, data) {
           training_data = test_data =  data;
           //myCache.set("training_data", training_data);
               
        });
        /*models.Preference.find({}, function(err, data) {
           training_data = test_data =  data;
           myCache.set("training_data", training_data);
               
        });
*/
      //}
    //});
        
};