
/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(request, response){
	data["pageA"] = true;
	response.render('home', data);
};

exports.pageA = function(request, response){
	data["pageA"] = true;
	response.render('home', data);
};

exports.pageB = function(request, response){
	data["pageA"] = false;
	response.render('home', data);
};