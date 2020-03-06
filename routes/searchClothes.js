
/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(request, response){
	var arr = data['clothes'];
	var answer = [];
	var user_key = request.query.brand;
	console.log(data['shoes']);

	for(var i = 0; i < arr.length; i++){
		if (arr[i]["brand"] == user_key){
			answer.push(arr[i]);
		}
	}

	response.render('home', {
		"clothes": answer
	});
};
