
/**
 * Module dependencies.
 */
import MD5 from 'crypto-js/md5';

/**
 * LoginController contains logic to handle login functionality. It uses apis from Auth service. 
 */
export default class Controller {
    constructor($state, Auth) {
        this.user = {};
        this.$state = $state;
        this.auth = Auth;
        this.errorMessage = undefined;
    }

    login() {
        this.auth.login({
            username: this.username.toLowerCase(),
            password: MD5(this.password).toString()
        }).then(() => {
            this.$state.go('index.videolist');
        }, (error) => {
            this.errorMessage = error;
        });
    }
}
