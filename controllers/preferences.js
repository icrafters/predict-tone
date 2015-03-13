
var models = require('../app/models'),
    md5 = require('MD5'),
    fs =  require("fs");

var training_data,
	test_data = {};


module.exports = {

    index: function(req, res) {
    	
    	getData();

     	console.log("in Index");
     	
     	res.json(training_data);
    }
};

getData_DB =  function (){
	  	var query = models.Preference.find({});
	  	query.sort({tone:-1, risklevel:1});
	  	query.exec(function(err, data) {
           training_data = test_data =  data;
           //myCache.set("training_data", training_data);
         	   
        });
};

getData =  function (){
   
    fs.readFile('app/data.js', 'utf8', function (err, data) {
      if (err) throw err;
      training_data = test_data = JSON.parse(data);
    });
        
};