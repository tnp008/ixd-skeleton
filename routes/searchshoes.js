/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(request, response){
	var user_key = request.query.brand;

	var arr_shoes = data['shoes'];
	var answer_shoes = [];
	
	var arr_shirts = data['shirts'];
	var answer_shirts = [];

	var arr_bottoms = data['bottoms'];
	var answer_bottoms = [];

	var arr_outerwear = data['outerwear'];
	var answer_outerwear = [];
	
	for(var i = 0; i < arr_shoes.length; i++){
		if (arr_shoes[i]["brand"] == user_key){
			answer_shoes.push(arr_shoes[i]);
		}
	}
	for(var i = 0; i < arr_shirts.length; i++){
		if (arr_shirts[i]["brand"] == user_key){
			answer_shirts.push(arr_shirts[i]);
		}
	}
	for(var i = 0; i < arr_bottoms.length; i++){
		if (arr_bottoms[i]["brand"] == user_key){
			answer_bottoms.push(arr_bottoms[i]);
		}
	}
	for(var i = 0; i < arr_outerwear.length; i++){
		if (arr_outerwear[i]["brand"] == user_key){
			answer_outerwear.push(arr_outerwear[i]);
		}
	}
	response.render('home', {
		"shoes": answer_shoes,
		"shirts": answer_shirts,
		"bottoms": answer_bottoms,
		"outerwear":answer_outerwear		
	});
};
