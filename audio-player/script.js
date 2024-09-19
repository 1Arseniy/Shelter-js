// const audio = document.querySelector('.audio');
const playMusic = document.querySelector('.play-music');
let isPlay = false;

const audio = new Audio(
  './audio/Gorillaz - Feel Good Inc.mp3'
);

function playPause() {
  if(isPlay) {
    audio.pause();
    isPlay = false;
  } else {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  }
}
playMusic.addEventListener('click', playPause);


const playButton = document.querySelector('.play-button');
// const pauseButton = document.querySelector('.pause-button');

function reversButton() {
  playButton.classList.toggle('pause-buton');
}

playButton.addEventListener('click',reversButton);