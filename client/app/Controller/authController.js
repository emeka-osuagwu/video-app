App.controller('authController', function($scope, $http, Auth, localStorageService, $location) {
	
	var 
	base_url	= "http://localhost:3000/api/",
	local_user 	= localStorageService;

	/*
		This function makes a {Post} request to login the user
	*/
	$scope.loginUser = function() 
	{
		
		$http({
		    method: 'POST',
		    url: base_url + 'user/auth', 
		    data: {"username": $scope.username, "password" : $scope.password}
		})
		.then(function(res) 
		{
			if (res.data.status == "error") 
			{
				swal("Oops!", "username or password exist :(", "error")
			}

			if (res.data.status == "success") 
			{
				local_user.set("authUser", res.data);
				$location.path("/");
				swal("Welcome", "", "success")
			}
		},
		function(err) 
		{
		    console.log('error...', err);
		});
	}

	/*
		This function makes a {Post} request to register the user
	*/
	$scope.registerUser = function() {
		
		var user_data = {
			"username" 	: $scope.username, 
			"password"	: $scope.password
		}

		$http({
		    method: 'POST',
		    url: base_url + 'user/register', 
		    data: user_data
		})
		.then(function(res) {

			if (res.data.status == 400) 
			{
				swal("Oops!", "username or password exist :(", "error")
			}

			if (res.data.status == 200) 
			{
				swal("Good job!", "registration successful :)", "success")
			}
		},
		function(err) {
		    console.log('error...', err);
		});
	}

});