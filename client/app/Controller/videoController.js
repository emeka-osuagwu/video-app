App.controller('videoController', function($scope, $http, $routeParams, localStorageService) {

	var 
	user_id 	= localStorageService.get("authUser").username,
	video_id 	= $routeParams.id;

	$http.get("http://localhost:3000/api/videos?sessionId=" + user_id)
	.then(function(response) {
		$scope.videos = response.data.data;
	});

	$http.get("http://localhost:3000/api/video?sessionId=" + user_id + "&videoId=" + video_id)
	.then(function(response) {
		$scope.video = response.data;
	});

});