import Player from '@vimeo/player'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

function onPlay (data) {
    let actSec = data.seconds;

    console.log(data);
    console.log(actSec);

    localStorage.setItem("videoplayer-current-time", actSec);
    };

player.on('timeupdate', onPlay);

let currentTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(currentTime).then(function(seconds) {

    console.log(seconds)

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});