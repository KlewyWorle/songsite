const playButton = document.getElementById("play-btn")
const pauseButton = document.getElementById("stop-btn")

const playButton2 = document.getElementById("play-btn2")
const pauseButton2 = document.getElementById("stop-btn2")

const volumeSlider = document.getElementById("volume")


let song_rapture = new Audio("rapture.mp3")
let song_metamorphosis = new Audio("meta.mp3")

playButton.onclick = () =>
{
    song_rapture.play();
    //song_rapture.volume = 0.8;
}
pauseButton.onclick = () =>
{
    song_rapture .pause();
}


playButton2.onclick = () =>
{
    song_metamorphosis.play();
    //song_metamorphosis.volume = 0.8;
}
pauseButton2.onclick = () =>
{
    song_metamorphosis.pause();
}


function ChangeVolume()
{
    song_rapture.volume = volumeSlider.value / 100;
    song_metamorphosis.volume = volumeSlider.value / 100;
}

