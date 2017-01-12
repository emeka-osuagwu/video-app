var userModel = require('../models/users');

var users = {};

users.register = function (req, res) {
	
	if(!req.body.username || !req.body.password)
	{
		res.status(400);
		res.send({
			"status" 	: 400,
			"message" 	: "Email and password is require!"
		});
	}
	else
	{
		userModel.saveUser(req.body.username, req.body.password)
		.then(function(user) 
		{
			res.send(user);
		})
		.catch(function(err) 
		{
			res.send(err);
		});
		
	}

};


// controller that handles user login request
users.auth = function (req, res) {

	if(!req.body.username || !req.body.password)
	{
		res.status(400);
		res.send({
			status:'error', 
			error:'Username or password is missing.'
		});	
	}
	
	var user = userModel.authUser(req.body.username, req.body.password);

	user.then(function(users)
	{
		res.status(200)
		res.send(users);	
	}, 
	function(){
		res.send({status:'error',error:'Error occured while fetching data from database.'});
	});
};

// controller that handles user logout request
users.logout = function (req, res) {

	var sessionId = req.query.sessionId;

	var user = userModel.logout(sessionId);

	res.send({status:'success'});	
};


module.exports = users;