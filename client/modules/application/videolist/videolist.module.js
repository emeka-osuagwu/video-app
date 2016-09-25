/*global angular*/

/**
 * Module dependencies.
 */
import routeConfig from './videolist.route.config';
import Controller from './videolist.controller';

/**
 * This module contains logic related to videolist page. 
 */
export default angular.module('VideoList', [])
.config(routeConfig)
.controller('VideoListCtrl', Controller);
