
/**
 * Module dependencies.
 */
import template from './application.html!text';
import './application.css!';

/**
 * RouteConfig function configures routes for index page.
 */
let routeConfig = ($stateProvider, $locationProvider, $urlRouterProvider) => {
    $stateProvider.state('index', {
        url: '/',
        template: template,
        controller: 'ApplicationCtrl',
        controllerAs: 'ctrl'
    });

    // $urlRouterProvider.otherwise('/');

    return $locationProvider.html5Mode(true);
};

routeConfig.$inject = [ '$stateProvider', '$locationProvider', '$urlRouterProvider'];

export default routeConfig;
