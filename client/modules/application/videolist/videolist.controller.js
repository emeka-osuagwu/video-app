/**
 * Module dependencies.
 */
import toastr from 'toastr';

/**
 * VideoListController contains view logic that is related to listing videos. 
 */
export default class Controller {
    constructor(Video) {
        this.videoList = [];
        this.videoService = Video;
        this.skip = -10;

        this.loadVideos();
    }

    loadVideos() {
        if (!this.fetchingVideos) {
            this.skip += 10;
            this.fetchingVideos = true;
            this.videosLoadingErrorMessage = '';
            this.videoService.getVideoList(this.skip).then((data) => {
                data.forEach(video => {
                    video.avgRating = this.videoService.calculateAverageRating(video);
                });
                this.videoList.push(...data);
                this.fetchingVideos = false;
            }, (error) => {
                this.fetchingVideos = false;
                this.videosLoadingErrorMessage = error;
                toastr.error('Problem loading videos !!');
            });
        }
    }
}
