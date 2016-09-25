/*global angular*/

/**
 * Module dependencies.
 */
import routeConfig from './videodetail.route.config';
import Controller from './videodetail.controller';

/**
 * This module contains all logic related to video detail page.
 */
export default angular.module('VideoDetail', [])
.config(routeConfig)
.controller('VideoDetailCtrl', Controller);
