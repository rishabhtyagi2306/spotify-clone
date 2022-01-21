console.log('Welcome');

let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songList'));
let songItemsPlay = Array.from(document.getElementsByClassName('songListPlay'));
let masterSongName = document.getElementById('masterSongName');
let songIndex = 1;

let songIDs = [
    document.getElementById('1'),
    document.getElementById('2'),
    document.getElementById('3'),
    document.getElementById('4'),
    document.getElementById('5'),
    document.getElementById('6'),
    document.getElementById('7'),
    document.getElementById('8'),
    document.getElementById('9'),
    document.getElementById('10'),
];

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
];

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
        songIDs[songIndex-1].classList.remove('fa-play-circle');
        songIDs[songIndex-1].classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        songIDs[songIndex-1].classList.remove('fa-pause-circle');
        songIDs[songIndex-1].classList.add('fa-play-circle');
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
        if(index == songIndex){
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
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            strind = "songs/" + index.toString() + ".mp3";
            audioElement.src = strind;
            console.log(strind);
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
        }
        songIndex = index;
        masterSongName.innerText = songs[songIndex-1].songName;
    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex == 10){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    masterSongName.innerText = songs[songIndex-1].songName;
    strind = "songs/" + songIndex.toString() + ".mp3";
    audioElement.src = strind;
    console.log(strind);
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
});

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex == 1){
        songIndex = 10;
    }
    else{
        songIndex -= 1;
    }
    masterSongName.innerText = songs[songIndex-1].songName;
    strind = "songs/" + songIndex.toString() + ".mp3";
    audioElement.src = strind;
    console.log(strind);
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
});