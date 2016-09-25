/**
 * This directive stops all other videos while one is playing 
 */
export default function() {
    return {
        restrict: 'A',
        link(scope, element, attrs) {
            $(element).bind('play', function() {
                var activated = this;
                $("video").each(function () { if (this !== activated) this.pause() });
            });

            $(element).bind('click', function() {
                if (this.paused) {
                    this.play();
                } else {
                    this.pause();
                }
            });

            $('.modal').on('hidden.bs.modal', function () {
                $('video').each(function() {
                  this.pause();
                });
            });
        }
    };
};