
var models = require('../app/models'),
    md5 = require('MD5');

var training_data,
	test_data = {};


module.exports = {

    index: function(req, res) {
    	
    	getData();

     	console.log("in Index");
     	
     	res.json(training_data);
    }
};

getData =  function (){
	// myCache = new NodeCache( { stdTTL: 1000, checkperiod: 120 } );
	// console.log(myCache.getStats());
	// myCache.get("training_data", function( err, value ){
	//   if( !err && Object.keys(value).length>0) {
	//     console.log( value );
	//     training_data=value;
	  
	//   }
	//   else {
	  	var query = models.Preference.find({});
	  	query.sort({tone:-1, risklevel:1});
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
