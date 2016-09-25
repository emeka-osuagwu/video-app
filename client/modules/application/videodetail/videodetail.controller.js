/**
 * Module dependencies.
 */
import toastr from 'toastr';

/**
 * VideoDetailController contains view logic for video detail page. It uses apis of 
 * Video service to get and update video details. This controller expects initial videoId parameter.  
 */
export default class Controller {
    constructor($stateParams, $state, Video) {
        this.currentVideoId = $stateParams.videoId;
        this.videoService = Video;
        this.$state = $state;
        this.newRating = 0;

        if (this.currentVideoId) {
            this.fetchingVideo = true;
            this.currentVideo = null;
            this.videoLoadingErrorMessage = '';
            this.videoService.getVideoById(this.currentVideoId).then((data) => {
                data.avgRating = this.videoService.calculateAverageRating(data);
                this.currentVideo = data;
                this.fetchingVideo = false;
            }, (error) => {
                this.fetchingVideo = false;
                this.videoLoadingErrorMessage = error;
                toastr.error('Problem loading video !!');
            });
        }
    }

    rateVideo(rating) {
        this.videoService.rateVideo(this.currentVideoId, rating).then((data) => {
            data.avgRating = this.videoService.calculateAverageRating(data);
            this.currentVideo = data;
            toastr.success('Rating updated successfully.');
        }, (error) => {
            this.currentVideo.avgRating = this.videoService.calculateAverageRating(this.currentVideo);
            toastr.error('Unable to update rating. Please try after sometime.');
        });
    }

    moveToVideoList() {
        this.$state.go('index.videolist');
    }
}
