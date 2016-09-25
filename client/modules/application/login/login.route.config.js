/**
 * Module dependencies.
 */
import template from './login.template.html!text';
import './login.css!';

/**
 * RouteConfig: It defines route for login view.
 */
let routeConfig = ($stateProvider) => {
    $stateProvider.state('index.login', {
        url: 'login',
        template: template,
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
    });
};

routeConfig.$inject = [ '$stateProvider'];

export default routeConfig;
