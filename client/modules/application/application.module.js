/*global angular*/

/**
 * Module dependencies.
 */
import routeConfig from './application.route.config';
import runBlock from './application.run';
import controller from './application.controller';

import ServiceModule from './shared_components/services/services.module';
import DirectiveModule from './shared_components/directives/directives.module';

import LoginModule from './login/login.module';
import VideoListModule from './videolist/videolist.module';
import VideoDetailModule from './videodetail/videodetail.module';

/**
 * Application Module
 */
let application;

application = angular.module('App', [ 
        'ui.router', 
        ServiceModule.name, 
        DirectiveModule.name,
        LoginModule.name,
        VideoListModule.name,
        VideoDetailModule.name
    ])
    .config(routeConfig)
    .run(runBlock)
    .controller('ApplicationCtrl', controller);

export default application;
