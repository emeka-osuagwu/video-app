
import { module, inject } from 'angular-mocks';
import ServiceModule from './services.module';

describe('Video Service', function () {
    var Auth = {},
        Video = {},
        $window,
        $httpBackend,
        userToken = {
            username: 'ali',
            sessionId: '5f4dcc3b5aa765d61d8327deb882cf99'
        },
        videoList = [{_id: 1, name: 'vid1'}, {_id: 2, name: 'vid2'}],
        video = {_id: 1, name: 'vid1'};

    beforeEach(module(ServiceModule.name));

    beforeEach(inject(function ($injector) {
        Auth = $injector.get('Auth');
        Video = $injector.get('Video');
        $window = $injector.get('$window');
        $httpBackend = $injector.get('$httpBackend');
    }));

    describe('getVideoList function', function () {
        it('should return list of videos when successful', function () {
            Auth.saveToken(userToken);

            $httpBackend.when('GET', '/videos?sessionId=5f4dcc3b5aa765d61d8327deb882cf99&skip=0&limit=10')
                .respond(200, {status: 'success', data: videoList});
            
            Video.getVideoList(0).then((response) => {
                expect(response).toEqual(videoList);
            });

            $httpBackend.flush();
        });
        it('should return error when unsuccessful', function () {

            $httpBackend.when('GET', '/videos?sessionId=5f4dcc3b5aa765d61d8327deb882cf99&skip=0&limit=10')
                .respond(200, {status: 'error', data: videoList});
            
            Video.getVideoList(0).then((response) => {
            }, (response) => {
                expect(response).toBe('Error');
            });

            $httpBackend.flush();
        });
        it('should return error when api fails', function () {

            $httpBackend.when('GET', '/videos?sessionId=5f4dcc3b5aa765d61d8327deb882cf99&skip=0&limit=10')
                .respond(400, {status: 'error', error: 'API failed'});
            
            Video.getVideoList(0).then((response) => {
            }, (response) => {
                expect(response).toBe('API failed');
            });

            $httpBackend.flush();
        });
    });

    describe('getVideoById function', function () {
        it('should return video when successful', function () {
            Auth.saveToken(userToken);

            $httpBackend.when('GET', '/video?sessionId=5f4dcc3b5aa765d61d8327deb882cf99&videoId=1')
                .respond(200, {status: 'success', data: video});
            
            Video.getVideoById(1).then((response) => {
                expect(response).toEqual(video);
            });

            $httpBackend.flush();
        });
        it('should return error when unsuccessful', function () {

            $httpBackend.when('GET', '/video?sessionId=5f4dcc3b5aa765d61d8327deb882cf99&videoId=1')
                .respond(200, {status: 'error', data: video});
            
            Video.getVideoById(1).then((response) => {
            }, (response) => {
                expect(response).toBe('Error');
            });

            $httpBackend.flush();
        });
        it('should return error when api fails', function () {

            $httpBackend.when('GET', '/video?sessionId=5f4dcc3b5aa765d61d8327deb882cf99&videoId=1')
                .respond(400, {status: 'error', error: 'API failed'});
            
            Video.getVideoById(1).then((response) => {
            }, (response) => {
                expect(response).toBe('API failed');
            });

            $httpBackend.flush();
        });
    });

    describe('rateVideo function', function () {
        it('should return updated rating when successful', function () {
            Auth.saveToken(userToken);

            $httpBackend.when('POST', '/video/ratings?sessionId=5f4dcc3b5aa765d61d8327deb882cf99')
                .respond(200, {status: 'success', data: video});
            
            Video.rateVideo(1, 4).then((response) => {
                expect(response).toEqual(video);
            });

            $httpBackend.flush();
        });
        it('should return error when unsuccessful', function () {

            $httpBackend.when('POST', '/video/ratings?sessionId=5f4dcc3b5aa765d61d8327deb882cf99')
                .respond(200, {status: 'error', data: video});
            
            Video.rateVideo(1, 4).then((response) => {
            }, (response) => {
                expect(response).toBe('Error');
            });

            $httpBackend.flush();
        });
        it('should return error when api fails', function () {

            $httpBackend.when('POST', '/video/ratings?sessionId=5f4dcc3b5aa765d61d8327deb882cf99')
                .respond(400, {status: 'error', error: 'API failed'});
            
            Video.rateVideo(1, 4).then((response) => {
            }, (response) => {
                expect(response).toBe('API failed');
            });

            $httpBackend.flush();
        });
    });

    describe('calculateAverageRating function', function () {
        it('should return average rating when available', function () {
            var videoData = {
                ratings: [1,2,3]
            }, average = 2;

            expect(Video.calculateAverageRating(videoData)).toBe(average);
        });
        it('should return zero rating when not available', function () {
            var videoData = {
                ratings: []
            }, average = 0;

            expect(Video.calculateAverageRating(videoData)).toBe(average);
        });
    });
});