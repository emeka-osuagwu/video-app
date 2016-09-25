/**
 * Module dependencies.
 */
import template from './videodetail.template.html!text';
import './videodetail.css!';

/**
 * RouteConfig: It defines route for video detail page.
 */
let routeConfig = ($stateProvider) => {
    $stateProvider.state('index.videodetail', {
        url: 'videodetail/:videoId',
        template: template,
        controller: 'VideoDetailCtrl',
        controllerAs: 'ctrl'
    });
};

routeConfig.$inject = [ '$stateProvider'];

export default routeConfig;
