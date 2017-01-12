var App = angular.module('App', ['ngRoute', 'LocalStorageModule']);

App.config(function($routeProvider, $locationProvider, localStorageServiceProvider) {
		
	localStorageServiceProvider.setPrefix('App');

	$routeProvider
	.when('/', {
		templateUrl : 'pages/home.html',
		controller  : 'homeController'
	})

	.when('/video/:id', {
		templateUrl : '/pages/video.html',
		controller  : 'videoController'
	})

	.when('/login', {
		templateUrl : '/pages/login.html',
		controller  : 'authController'
	})

	.when('/register', {
		templateUrl : '/pages/login.html',
		controller  : 'authController'
	})

	.otherwise({
	  templateUrl : 'pages/home.html',
	  controller  : 'mainController'
	});

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
})

.run( function(Auth, $rootScope, $location, localStorageService) {
   
   $rootScope.$on( "$routeChangeStart", function(event, next, current) {

   		var auth_user = localStorageService.get('authUser');

   		if (auth_user == null || !auth_user) 
   		{
   			if ($location.path() == "/login" || $location.path() == "/login/"  || $location.path() == "/register/" || $location.path() == "/register") 
   			{
   				// Allow Route
   			}
   			else
   			{
   				$location.path("/login")
   			}
   		}
   		else
   		{
   			if ($location.path() == "/login" || $location.path() == "/login/"  || $location.path() == "/register/" || $location.path() == "/register")
   			{
   				$location.path("/");
   			}
   			// Allow Route
   		}
   });


   $rootScope.logout = function() {
   		localStorageService.remove("authUser");
   		$location.path("/login")
   };

   


});



