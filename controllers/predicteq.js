var models = require('../app/models'),
    md5 = require('MD5'),
    //NodeCache =  require('node-cache'),
	DecisionTree = require('decision-tree'),
    fs =  require("fs");

var eq_training_data,
    eq_test_data = {},
    eq_class_name = "equotient",
    eq_features = ["eq1", "eq2","eq3","eq4","eq5","eq6","eq7"],
    eq_predicted_class="NaN";

module.exports = {

    index: function(req, res) {
        getEQTrainingData();
        var eQuotient =  new models.Predicteq();

        eQuotient.eq1 = req.body["eq1"];
        eQuotient.eq2 = req.body["eq2"];
        eQuotient.eq3 = req.body["eq3"];
        eQuotient.eq4 = req.body["eq4"];
        eQuotient.eq5 = req.body["eq5"];
        eQuotient.eq6 = req.body["eq6"];
        eQuotient.eq7 = req.body["eq7"];

        /*eQuotient.eq1 = "1";
        eQuotient.eq2 = "5";
        eQuotient.eq3 = "5";
        eQuotient.eq4 = "5";
        eQuotient.eq5 = "5";
        eQuotient.eq6 = "5";
        eQuotient.eq7 = "1";
*/
        
       
        var equotient = this.predictEQuotient (eQuotient,eq_training_data);
        eQuotient.equotient = equotient;
        res.json(eQuotient);

    }

};

predictEQuotient = function (eQuotient, eq_training_data){
    //use the data in the DB and train the id3 algo.
    
    var dt= new DecisionTree(eq_training_data, eq_class_name, eq_features);

    eq_predicted_class = dt.predict({
          eq1: eQuotient["eq1"],
          eq2: eQuotient["eq2"],
          eq3: eQuotient["eq3"],
          eq4: eQuotient["eq4"],
          eq5: eQuotient["eq5"],
          eq6: eQuotient["eq6"],
          eq7: eQuotient["eq7"]
    });
    var accuracy = dt.evaluate(eq_test_data);

    var treeModel = dt.toJSON();
    console.log("eq_predicted_class:"+eq_predicted_class);        
    return eq_predicted_class;
};


getEQTrainingData =  function (){

     eq_training_data = eq_test_data = JSON.parse(fs.readFileSync('app/data_emotional_quotient.js', 'utf8'));

};
