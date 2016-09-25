
/**
 * Module dependencies.
 */
import template from './videolist.template.html!text';
import './videolist.css!';

/**
 * RouteConfig configures route for videolist page.
 */
let routeConfig = ($stateProvider) => {
    $stateProvider.state('index.videolist', {
        url: 'videolist',
        template: template,
        controller: 'VideoListCtrl',
        controllerAs: 'ctrl'
    });
};

routeConfig.$inject = [ '$stateProvider'];

export default routeConfig;
