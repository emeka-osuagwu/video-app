var users = require('../controllers/users');
var videos = require('../controllers/videos');
var helpers = require('../helpers/helperFunctions');

var routesAPI = function(app){


	app.get('/user/logout', helpers.isAuthenticated, users.logout);
	app.post('/api/user/auth', users.auth);
	app.post('/api/user/register', users.register);

	//video routes
	app.get('/api/video', helpers.isAuthenticated, videos.getOne);
	app.get('/api/videos', helpers.isAuthenticated, videos.get);
	app.post('/video/ratings', helpers.isAuthenticated, videos.rate);
}

module.exports = routesAPI;