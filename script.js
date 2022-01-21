console.log('Welcome');

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songList'));

let songs = [
    {songName: "song 1", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "song 2", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "song 3", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "song 4", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "song 5", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "song 6", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: "song 7", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: "song 8", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg"},
    {songName: "song 9", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg"},
    {songName: "song 10", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName('span')[0].innerText = songs[i].songName;
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    // let songDuration = new Audio((songs[i].filePath).toString());
    // progress = parseInt((audioElement.duration) * 100);
    // element.getElementsByClassName('timestamp')[0].innerText = progress;
});

masterPlay.addEventListener('click', ()=>{
    console.log("clickable");
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});