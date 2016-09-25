
import { module, inject } from 'angular-mocks';
import MD5 from 'crypto-js/md5';
import ApplicationModule from '../application.module';

describe('Login Controller', function () {

    var $state,
        $location,
        $q,
        $rootScope,
        Auth,
        $controller,
        $httpBackend,
        ctrl,
        userToken = {
            username: 'ali',
            sessionId: '5f4dcc3b5aa765d61d8327deb882cf99'
        };

    beforeEach(function () {
        module(ApplicationModule.name);
    });

    beforeEach(inject(function ($injector) {
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $q = $injector.get('$q');
        $rootScope = $injector.get('$rootScope');
        Auth = $injector.get('Auth');
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(function () {
        ctrl = $controller('LoginCtrl', {
            $state: $state,
            Auth: Auth
        }, {
            auth: Auth,
            $state: $state,
            user: {},
            username: 'ali',
            password: 'password',
            errorMessage: undefined
        });
    });

    beforeEach(function () {
        if (Auth.isLoggedIn()) {
            $httpBackend.when('GET', '/user/logout?sessionId=5f4dcc3b5aa765d61d8327deb882cf99')
                .respond(200, {status: 'success'});
            
            Auth.logout();

            $httpBackend.flush();
        }
    });

    describe('login function', function () {
        it('should call login function in Auth service with user details', function () {
            spyOn(Auth, 'login').and.callFake(function () {
                var deffered = $q.defer();
                deffered.reject();
                return deffered.promise;
            });
            ctrl.login();
            $rootScope.$apply();
            expect(Auth.login).toHaveBeenCalledWith({
                username: ctrl.username,
                password: MD5(ctrl.password).toString()
            });
        });
        it('should not redirect to video list page if login fails', function () {
            $httpBackend.when('POST', '/user/auth')
                .respond(200, Object.assign({}, userToken, {status: 'error'}));

            ctrl.login();
            
            Auth.login().then(() => {
                expect($location.url()).toBe('/login');
            });

            $httpBackend.flush();
        });
        it('should receive error message if login fails', function () {
            $httpBackend.when('POST', '/user/auth')
                .respond(200, Object.assign({}, userToken, {status: 'error', error: 'ErrorMessage'}));

            ctrl.login();
            
            Auth.login().then(() => {
                expect(ctrl.errorMessage).toBe('ErrorMessage');
            });

            $httpBackend.flush();
        });
        it('should redirect to video list page if login is successful', function () {
            $httpBackend.when('POST', '/user/auth')
                .respond(200, Object.assign({}, userToken, {status: 'error', error: 'ErrorMessage'}));

            ctrl.login();
            
            Auth.login().then(() => {
                expect($location.url()).toBe('/videolist');
            });

            $httpBackend.flush();
        });
    });
});