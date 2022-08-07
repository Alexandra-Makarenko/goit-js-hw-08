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

const currentTime = localStorage.getItem("videoplayer-current-time");

if (currentTime) player.setCurrentTime(currentTime);
