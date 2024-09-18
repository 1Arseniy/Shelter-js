// const audio = document.querySelector('.audio');
const playPauseButton = document.querySelector('.play-pause-button');
let isPlay = false;

const audio = new Audio();

if (isPlay == false) {
  // let isPlay = true;
  function playAudio() {
    audio.src = './audio/Coldplay feat. Beyonce - Hymn For The Weekend.mp3'
    audio.currrntTime = 0;
    audio.play();
  }
} else if (!isPlay) {
    // let isPlay= false;
    function pauseAudio() {
      audio.pause();
    }
}
  playPauseButton.addEventListener('click', playAudio);
  playPauseButton.addEventListener('click', pauseAudio);
  