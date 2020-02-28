
/*
 * GET home page.
 */

var data = require('../data.json');

exports.view = function(request, response){
	data["viewAlt"] = false;
	response.render('index', data);
};

exports.viewAlt = function(request, response){
	data["viewAlt"] = true;
	response.render('index', data);
};
