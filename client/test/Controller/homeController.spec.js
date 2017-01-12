
describe("Home Controller", function () {
  var scope,
      controller,
      http,
      localStorageServiceMock = {
        get: function (whattoget) {
          switch (whattoget) {
            case "authUser":
              return {
                name: "",
              };
            case defualt:
              return {};
          }
        }
      };
      
  beforeEach(function () {
    module('App');
  });
  
  beforeEach(inject(function ($injector, $rootScope, $controller) {
    
    scope = $rootScope.$new();
    http = $injector.get('$http');
    
    controller = $controller('homeController', {
      $scope: scope,
      $http: http,
      localStorageService: localStorageServiceMock
    })
  }));

	it("should have username and password set", function () {
	  expect(scope.password).toBe("password");
	});
});
