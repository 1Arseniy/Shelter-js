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


  function nextSong() {
    musicPlay.classList.add('active');
    index++
    audio.src = songs[index];
    audio.play();
    audio.currentTime = 0;
    isPlay = true;
   /*  if(songs[3]) {
      index = 0;
    } */
  }
  


/* function backSong() {
  musicPlay.classList.add('active');
  index--
  index.src = songs[index];
  audio.play();
  audio.currentTime = 0;
  isPlay = true;
  if(songs[0]) {
    index = 2;
  }
}
 */
musicPlay.addEventListener('click', playPause);
nextMusic.addEventListener('click', nextSong);
// backMusic.addEventListener('click', backSong);


/* 
nextMusic.addEventListener('click', () => {
    index ++;
    if(index >= index[2]) {
      index = 0;
    }
  })
 */