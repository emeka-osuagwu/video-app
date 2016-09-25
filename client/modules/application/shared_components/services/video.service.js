
/**
 * This service communicates with backend and exposes apis to do video related tasks. 
 */
 
export default class Video {
    constructor($http, $q, Auth) {
        this.$http = $http;
        this.$q = $q;
        this.auth = Auth;
    }

    getVideoList(skip) {
        var deffered = this.$q.defer(),
            sessionId = this.auth.currentUser().sessionId,
            url = '/videos?sessionId=' + sessionId;

        url += '&skip=' + skip;
        url += '&limit=10';

        this.$http.get(url).then((response) => {
            if (response.data.status === 'success') {
                deffered.resolve(response.data.data);
            } else {
                deffered.reject('Error');
            }
        }, (response) => {
            if (response.data.status === 'error') {
                deffered.reject(response.data.error);
            }
        });

        return deffered.promise;
    }

    getVideoById(videoId) {
        var deffered = this.$q.defer(),
            sessionId = this.auth.currentUser().sessionId,
            url = '/video?sessionId=' + sessionId;

        url += '&videoId=' + videoId;

        this.$http.get(url).then((response) => {
            if (response.data.status === 'success') {
                deffered.resolve(response.data.data);
            } else {
                deffered.reject('Error');
            }
        }, (response) => {
            if (response.data.status === 'error') {
                deffered.reject(response.data.error);
            }
        });

        return deffered.promise;
    }

    rateVideo(videoId, rating) {
        var deffered = this.$q.defer(),
            sessionId = this.auth.currentUser().sessionId,
            url = '/video/ratings?sessionId=' + sessionId,
            postData = {
                videoId: videoId,
                rating: rating
            };

        this.$http.post(url, postData).then((response) => {
            if (response.data.status === 'success') {
                deffered.resolve(response.data.data);
            } else {
                deffered.reject('Error');
            }
        }, (response) => {
            if (response.data.status === 'error') {
                deffered.reject(response.data.error);
            }
        });

        return deffered.promise;
    }

    calculateAverageRating(video) {
        if (video.ratings.length > 0) {
            return Math.floor(video.ratings.reduce((prev, cur) => {
                return prev + cur;
            }, 0)/video.ratings.length);
        } else {
            return 0;
        }
    }
}
