var data = require("../data.json");

exports.addItem = function(request, response) {    
	// Your code goes here
	
	data.add.push({"brand": request.query.brand,
		"description": request.query.description, 
		"imageURL": "https://i.pinimg.com/originals/47/85/cb/4785cb6aa6e544d57908dd49d38d796f.jpg" });

	console.log(data)
	response.render('index', data);
 }