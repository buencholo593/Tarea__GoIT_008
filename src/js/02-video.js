import Player from '@vimeo/player'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function(tittle) {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function(data) {
    console.log(data)
    // data is an object containing properties specific to that event
};
player.on('timeupdate', onPlay);