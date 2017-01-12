App.controller('homeController', function($scope, $http, Auth, localStorageService) {

	$scope.appUser = localStorageService.get("authUser")

	$http.get("http://localhost:3000/api/videos?sessionId=emeka")
	.then(function(response) {
	     $scope.videos = response.data.data;

	});
});