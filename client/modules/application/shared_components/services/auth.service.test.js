
import { module, inject } from 'angular-mocks';
import ServiceModule from './services.module';

describe('Authentication Service', function () {

    var Auth = {},
        $window,
        $httpBackend,
        userToken = {
            username: 'ali',
            sessionId: '5f4dcc3b5aa765d61d8327deb882cf99'
        };

    beforeEach(module(ServiceModule.name));

    beforeEach(inject(function ($injector) {
        Auth = $injector.get('Auth');
        $window = $injector.get('$window');
        $httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(function () {
        if (Auth.isLoggedIn()) {
            $httpBackend.when('GET', '/user/logout?sessionId=5f4dcc3b5aa765d61d8327deb882cf99')
                .respond(200, {status: 'success'});
            
            Auth.logout();

            $httpBackend.flush();
        }
        // $window.localStorage.removeItem('video-portal-token');
    });

    describe('saveToken function', function () {
        it('should save user token in localstorage', function () {
            Auth.saveToken(userToken);
            expect(JSON.parse($window.localStorage['video-portal-token'])).toEqual(userToken);
        });
    });

    describe('getToken function', function () {
        it('should get user token from localstorage', function () {
            Auth.saveToken(userToken);
            expect(Auth.getToken()).toEqual(userToken);
        });
    });

    describe('isLoggedIn function', function () {
        it('should call getToken function', function() {
            spyOn(Auth, "getToken");
            Auth.isLoggedIn();
            expect(Auth.getToken).toHaveBeenCalled();
        });
        it('should return true when user is logged in', function () {
            Auth.saveToken(userToken);
            expect(Auth.isLoggedIn()).toBe(true);
        });
        it('should return false when user is not logged in', function () {
            expect(Auth.isLoggedIn()).toBe(false);
        });    
    });

    describe('currentUser function', function () {
        it('should return undefined when user is not logged in', function () {
            expect(Auth.currentUser()).not.toBeDefined();
        });
        it('should return user object when user is logged in', function () {
            Auth.saveToken(userToken);
            expect(Auth.currentUser()).toEqual(userToken);
        });
    });

    describe('login function', function () {
        it('should call saveToken when successful', function () {
            spyOn(Auth, "saveToken");
            $httpBackend.when('POST', '/user/auth')
                .respond(200, Object.assign({}, userToken, {status: 'success'}));
            
            Auth.login().then(() => {
                expect(Auth.saveToken).toHaveBeenCalled();
            });

            $httpBackend.flush();
        });
        it('should set login status correctly when login successful', function () {
            $httpBackend.when('POST', '/user/auth')
                .respond(200, Object.assign({}, userToken, {status: 'success'}));
            
            Auth.login().then(() => {
                expect(Auth.isLoggedIn()).toBe(true);
            });

            $httpBackend.flush();
        });
        it('should set login status correctly when login unsuccessful', function () {
            $httpBackend.when('POST', '/user/auth')
                .respond(200, {status: 'error', error: 'Login failed'});
            
            Auth.login().then(() => {
            }, (error) => {
                expect(Auth.isLoggedIn()).toBe(false);
            });

            $httpBackend.flush();
        });
    });

    describe('logout function', function () {
        it('should remove localstorage entry when successful', function () {            
            Auth.saveToken(userToken);

            $httpBackend.when('GET', '/user/logout?sessionId=5f4dcc3b5aa765d61d8327deb882cf99')
                .respond(200, {status: 'success'});
            
            Auth.logout().then(() => {
                expect($window.localStorage.removeItem('video-portal-token')).not.toBeDefined();
            });

            $httpBackend.flush();
        });
    });
});