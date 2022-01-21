console.log('Welcome');

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songList'));
let songItemsPlay = Array.from(document.getElementsByClassName('songListPlay'));
let songID = 1;

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
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = ()=>{
    Array.from(songItemsPlay).forEach((element, i) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

songItemsPlay.forEach((element, i) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        // console.log(index);
        if(index == songID){
            if(audioElement.paused || audioElement.currentTime <= 0){
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                element.classList.remove('fa-play-circle');
                element.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
            }
            else{
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                element.classList.remove('fa-pause-circle');
                element.classList.add('fa-play-circle');
                gif.style.opacity = 0;
            }
        }
        else{
            makeAllPlays();
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
            strind = "songs/" + index.toString() + ".mp3";
            audioElement.src = strind;
            console.log(strind);
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
        }
        songID = index;
    })
});