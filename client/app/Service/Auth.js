  var App = angular.module('App')
  .service('Auth', function Auth($q, $http) 
  {
		var 
		auth 				= {},
		baseUrl				= "http://localhost:3000/api/",
		authenticatedUser 	= null;

		auth.requestUser = function () 
		{
			var result = $q.defer();

			$http.get("http://localhost:3000/api/video?sessionId=emeka&videoId=1")
			.then(function(user) 
			{
				authenticatedUser = user.data;
				result.resolve(user);
			})
			.catch(function(error) 
			{
				console.log('error...', err)
			});

			return result.promies;
		};

		auth.exists = function() 
		{
			return authenticatedUser != null;
		};

		auth.getUser = function() 
		{
			return authenticatedUser;
		};

		auth.setAuthUser = function(data) 
		{
			authenticatedUser = data;
		}

		auth.login = function(data) 
		{
			var result = $q.defer();

			$http.get("http://localhost:3000/api/video?sessionId=emeka&videoId=1")
			.then(function(user) 
			{
				authenticatedUser = user.data;
				result.resolve(user);
			})
			.catch(function(error) 
			{
				console.log('error...', err)
			});

			return result.promies;
		};

		auth.logout = function() 
		{
			authenticatedUser = null;
		}

		return auth;
  });