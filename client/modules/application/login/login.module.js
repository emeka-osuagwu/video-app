/*global angular*/

/**
 * Module dependencies.
 */
import routeConfig from './login.route.config';
import Controller from './login.controller';

/**
 * This module contains all logic related to login functionality.
 */
export default angular.module('Login', [])
.config(routeConfig)
.controller('LoginCtrl', Controller);
