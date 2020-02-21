
/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(request, response){
	var arr = data['shoes'];
	var answer = [];
	var userKey = "Vans";
	console.log(data['shoes']);

	for(var i = 0; i < arr.length; i++){
		if (arr[i]["brand"] == userKey){
			answer.push(arr[i]);
		}
	}

	response.render('index', {
		"shoes": answer
	});
};
