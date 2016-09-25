
/**
 * This service communicates with backend and exposes apis to do authentication tasks. 
 */
 
export default class Auth {
    constructor($http, $window, $q) {
        this.$http = $http;
        this.$window = $window;
        this.$q = $q;
    }

    saveToken(token) {
        this.$window.localStorage['video-portal-token'] = JSON.stringify(token);
    }

    getToken() {
        var stringifiedToken = this.$window.localStorage['video-portal-token'];
        if (stringifiedToken) {
            return JSON.parse(stringifiedToken);
        } else {
            return stringifiedToken;
        }
    }

    isLoggedIn() {

        var token = this.getToken(),
            payload,
            returnValue;

        if (token) {
            /*payload = JSON.parse(this.$window.atob(token.split('.')[1]));

            returnValue = payload.exp > Date.now() / 1000;*/
            returnValue = true;
        } else {
            returnValue = false;
        }

        return returnValue;
    }

    currentUser() {

        var token, payload;

        if(this.isLoggedIn()) {
            token = this.getToken();
            return token;
            /*payload = JSON.parse(this.$window.atob(token.split('.')[1]));
            return {
                email : payload.email,
                name : payload.name
            };*/
        }
    }

    /*register(user) {
        return this.$http.post('/user/register', user).success(data => {
            this.saveToken(data.token);
        });
    }*/

    login(user) {
        var deffered = this.$q.defer();

        this.$http.post('/user/auth', user).success(data => {
            if (data.status === 'error') {
                deffered.reject(data.error);
            } else {
                this.saveToken(data);
                deffered.resolve();
            }
        });

        return deffered.promise; 
    }

    logout() {
        var sessionId = this.currentUser().sessionId;
        return this.$http.get('/user/logout?sessionId=' + sessionId).success(data => {
            if (data.status === 'success') {
                this.$window.localStorage.removeItem('video-portal-token');
            }
        });
    }
}