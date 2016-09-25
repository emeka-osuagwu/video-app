/*global angular*/

/**
 * Module dependencies
 */
import loader from './loader/loader.directive';
import infiniteScroll from './infiniteScroll/infiniteScroll.directive';
import noParallelPlay from './noParallelPlay/noParallelPlay.directive';
import starRating from './starRating/starRating.directive';

/**
 * This modules contains all directives.
 */
export default angular.module('Directives', [])
    
    .directive('loader', loader)
    .directive('infiniteScroll', infiniteScroll)
    .directive('noParallelPlay', noParallelPlay)
    .directive('starRating', starRating);
