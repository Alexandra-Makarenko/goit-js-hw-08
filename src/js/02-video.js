import vimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
    const player = new vimeoPlayer(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', throttle(function (time) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time.seconds));
    console.log(time);
}
, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
    console.log(seconds)
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});