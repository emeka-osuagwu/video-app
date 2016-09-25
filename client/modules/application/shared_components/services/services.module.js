/*global angular*/

/**
 * Module dependencies 
 */

import CommonUtilService from './commonUtil.service';
import AuthService from './auth.service';
import VideoService from './video.service';


/**
 * This module contains all services 
 */

export default angular.module('Services', [])

    .service('CommonUtil', CommonUtilService)
    .service('Auth', AuthService)
    .service('Video', VideoService);