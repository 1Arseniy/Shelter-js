// const audio = document.querySelector('.audio');
const musicPlay = document.querySelector(".music-play");
let isPlay;
let index;
let audio;

const pictures = [
    "./pictures/gorillaz.jpg",
    "./pictures/bacground-coldplay.jpg",
    "./pictures/robin-sugar.jpg",
];

const songs = [
    "./audio/Gorillaz - Feel Good Inc.mp3",
    "./audio/Robin Schulz feat. Francesco Yates – Sugar.mp3",
    "./audio/Coldplay feat. Beyonce - Hymn For The Weekend.mp3",
];

if (index === undefined) {
    index = 0;
    audio = new Audio(songs[index]);
}

function playPause() {
    if (isPlay) {
        audio.pause();
        isPlay = false;
    } else {
        audio.play();
        // audio.currentTime = 0;
        isPlay = true;
    }
}

musicPlay.addEventListener("click", () => {
    musicPlay.classList.toggle("active");
});

const backMusic = document.querySelector(".back-music");
const nextMusic = document.querySelector(".next-music");

function nextSong() {
    musicPlay.classList.add("active");
    if (index < songs.length - 1) {
        index++;
    } else {
        index = 0;
    }
    audio.src = songs[index];
    audio.play();
    audio.currentTime = 0;
    isPlay = true;
}

function backSong() {
    musicPlay.classList.add("active");
    if (index == 0) {
        index = songs.length - 1;
    } else {
        index--;
    }
    audio.src = songs[index];
    audio.play();
    audio.currentTime = 0;
    isPlay = true;
}

const input = document.querySelector(".input");

audio.addEventListener("timeupdate", () => {
    input.value = audio.currentTime;
    input.max = audio.duration;
});

musicPlay.addEventListener("click", playPause);
nextMusic.addEventListener("click", nextSong);
backMusic.addEventListener("click", backSong);
