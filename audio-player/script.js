// const audio = document.querySelector('.audio');
const musicPlay = document.querySelector('.music-play');
let isPlay = false;
let index = 0;

const songs = [
  './audio/Gorillaz - Feel Good Inc.mp3',
  './audio/Robin Schulz feat. Francesco Yates – Sugar.mp3',
  './audio/Coldplay feat. Beyonce - Hymn For The Weekend.mp3'
]

const audio = new Audio(songs[index]);
  
function playPause() {
  if(isPlay) {
    audio.pause();
    isPlay = false;
  } else {
    audio.play();
    // audio.currentTime = 0;
    isPlay = true;
  }
}


musicPlay.addEventListener('click', () => {
  musicPlay.classList.toggle('active');
})

const backMusic = document.querySelector('.back-music');
const nextMusic = document.querySelector('.next-music');

/* function nextSong() {
  index = (index + 1 );
  index.src = songs[index];
  audio.play();
  audio.currentTime = 0;
  isPlay = true;
} */

musicPlay.addEventListener('click', playPause);
// nextMusic.addEventListener('click', nextSong);


/* 
nextMusic.addEventListener('click', () => {
    index ++;
    if(index >= index[2]) {
      index = 0;
    }
  })
 */