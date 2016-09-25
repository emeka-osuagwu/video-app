
import { module, inject } from 'angular-mocks';
import MD5 from 'crypto-js/md5';
import ApplicationModule from '../application.module';

describe('VideoList Controller', function () {

    var $state,
        $location,
        $q,
        $rootScope,
        Auth,
        Video,
        $controller,
        $httpBackend,
        ctrl,
        userToken = {
            username: 'ali',
            sessionId: '5f4dcc3b5aa765d61d8327deb882cf99'
        },
        videoList = [{_id: 1, name: 'vid1'}, {_id: 2, name: 'vid2'}];

    beforeEach(function () {
        module(ApplicationModule.name);
    });

    beforeEach(inject(function ($injector) {
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $q = $injector.get('$q');
        $rootScope = $injector.get('$rootScope');
        Auth = $injector.get('Auth');
        Video = $injector.get('Video');
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
    }));

    beforeEach(function () {
        ctrl = $controller('VideoListCtrl', {
            Video: Video
        }, {
            videoList: [],
            videoService: Video,
            skip: -10
        });
    });

    describe('constructor function', function () {
        it('should call loadVideos function', function () {
            expect(ctrl.skip).toBe(0);
        });
    });

    describe('loadVideos function', function () {
        it('should not load videos when fetching videos', function () {
            spyOn(Video, 'getVideoList');
            ctrl.fetchingVideos = true;
            ctrl.loadVideos();
            expect(Video.getVideoList).not.toHaveBeenCalled();
            expect(ctrl.skip).toBe(0);
        });
    });
});