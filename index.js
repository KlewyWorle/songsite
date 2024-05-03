const volumeSlider = document.getElementById("volume")


let rapture = new Audio("rapture.mp3")
let meta = new Audio("meta.mp3")
let allgirls = new Audio("allgirls.mp3")
let songs = {
    "rapture": rapture,
    "meta" : meta,
    "allgirls" : allgirls
}

document.addEventListener("click", (evnt) =>
{
    if(songs[evnt.target.id].paused)
    {
        songs[evnt.target.id].play();
    }
    else
    {
        songs[evnt.target.id].pause();
    }
});

function ChangeVolume() {
    const volume = volumeSlider.value / 100; // Normalize volume to 0-1 range
    for (const song in songs) {
      songs[song].volume = volume;
    }
  }

