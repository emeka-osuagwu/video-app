
/**
 * Run function contains routing logic of the application.
 */

let run = ($rootScope, Auth, $state) => {

    let routeChangeEvent = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        if (!Auth.isLoggedIn() && toState.name !== 'index.login') {
            console.log('DENY : Redirecting to Login');
            event.preventDefault();
            $state.go('index.login');
        } else if (Auth.isLoggedIn() && (toState.name === 'index.login' || toState.name === 'index')) {
            console.log('DENY : Redirecting to Videolist');
            event.preventDefault();
            $state.go('index.videolist');
        } else {
            console.log('ALLOW');
        }
    });
};

run.$inject = [ '$rootScope', 'Auth', '$state' ];

export default run;
