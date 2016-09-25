/**
 * Module dependencies
 */
import './starRating.css!';

/**
 * This directive shows stars for rating 
 */
export default function() {
    return {
        restrict: 'A',
        scope : {
            ratingValue: '=',
            max: '=',
            size: '=',
            readOnly: '=',
            onRatingSelected: '&'
        },
        template: '<ul class="rating">'
                     + '    <li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
                     + '\u2605'
                     + '</li>'
                     + '</ul>',
        link(scope, element, attrs) {
            var sizes = ['size1', 'size2', 'size3', 'size4', 'size5'];
            
            var updateStars = function () {
                scope.stars = [];
                for ( var i = 0; i < scope.max; i += 1) {
                    scope.stars.push({
                        filled : i < scope.ratingValue,
                        [sizes[scope.size - 1]] : true,
                        disabled: scope.readOnly
                    });
                }
            };
            
            scope.toggle = function (index) {
                if (!scope.readOnly) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelected({
                        rating : index + 1
                    });
                }
            };
            
            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal || newVal === 0) {
                    updateStars();
                }
            });
        }
    };
};