/**
 * This directive provides facility to lazy load data from api while scrolling. 
 */
export default function() {
    return {
        restrict: 'A',
        link(scope, element, attrs) {
            var visibleHeight = $(document).height();
            var threshold = 100;

            /*$(document).scroll(function() {
                var scrollableHeight = $(document).prop('scrollHeight');
                var hiddenContentHeight = scrollableHeight - visibleHeight;

                console.log(scrollableHeight);
                console.log(visibleHeight);
                console.log(hiddenContentHeight - $(document).scrollTop());
                if (hiddenContentHeight - $(document).scrollTop() <= threshold) {
                    // Scroll is almost at the bottom. Loading more rows
                    scope.$apply(attrs.infiniteScroll);
                }
            });*/

            $(window).scroll(function() {
                if($(window).scrollTop() + $(window).height() > $(document).height() - threshold) {
                    // Scroll is almost at the bottom. Loading more rows
                    scope.$apply(attrs.infiniteScroll);
                }
            });
        }
    };
};