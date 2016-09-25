
/**
 * Module dependencies.
 */
import toastr from 'toastr';

/**
 * ApplicationController contains application level view logic. 
 */
export default class Controller {
    constructor($state, Auth) {
        this.auth = Auth;
        this.$state = $state;
    }

    isLoggedIn() {
        return this.auth.isLoggedIn();
    }

    logout() {
        this.auth.logout().then(() => {
            this.$state.go('index.login');
        }, () => {
            toastr.error('Logout Failed !!');
        });
    }
}
