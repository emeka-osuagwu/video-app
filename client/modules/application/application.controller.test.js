
import { module, inject } from 'angular-mocks';
import 'angular-ui-router';
import ApplicaitonModule from './application.module';

describe('Application Controller', function () {

    var $state,
        $location,
        Auth,
        $controller,
        $httpBackend,
        ctrl,
        userToken = {
            username: 'ali',
            sessionId: '5f4dcc3b5aa765d61d8327deb882cf99'
        };

    beforeEach(module(ApplicaitonModule.name));

    beforeEach(inject(function ($injector) {
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        Auth = $injector.get('Auth');
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(function () {
        ctrl = $controller('ApplicationCtrl', {
            $state: $state,
            Auth: Auth
        }, {
            auth: Auth,
            $state: $state
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

    describe('isLoggedIn function', function () {
        it('should return fasle when user is not logged in', function () {
            expect(ctrl.isLoggedIn()).toBe(false);
        });
        it('should return true when user is logged in', function () {
            $httpBackend.when('POST', '/user/auth')
                .respond(200, Object.assign({}, userToken, {status: 'success'}));
            
            Auth.login().then(() => {
                expect(ctrl.isLoggedIn()).toBe(true);
            });

            $httpBackend.flush();
        });
    });
    describe('logout function', function () {
        it('should not redirect url if logout fails', function () {
            $httpBackend.when('POST', '/user/auth')
                .respond(200, Object.assign({}, userToken, {status: 'success'}));

            $httpBackend.when('GET', '/user/logout?sessionId=5f4dcc3b5aa765d61d8327deb882cf99')
                .respond(500, {status: 'success'});
            
            Auth.login().then(() => {
                Auth.logout().then(() => {
                    expect($location.url()).toBe('/videolist');
                });
            });

            $httpBackend.flush();
        });
        it('should redirect to login page if logout is successful', function () {
            $httpBackend.when('POST', '/user/auth')
                .respond(200, Object.assign({}, userToken, {status: 'success'}));

            $httpBackend.when('GET', '/user/logout?sessionId=5f4dcc3b5aa765d61d8327deb882cf99')
                .respond(200, {status: 'success'});
            
            Auth.login().then(() => {
                Auth.logout().then(() => {
                    expect($location.url()).toBe('/login');
                });
            });

            $httpBackend.flush();
        });
    });
});