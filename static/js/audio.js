
function demoPlay() {
    const DemoBtn = document.getElementById('demoBtn')
    const TextIndicate = document.querySelector('.text-indicate')
    const videoDemos = document.getElementById('video-demos')
    const frontImg = document.getElementById('front-img')
    // const videoPauseGroup = document.getElementById('video-pausegroup')

    if (DemoBtn.checked == true) {
        videoDemos.style.display = 'block'
        frontImg.style.display = 'none'
        TextIndicate.innerHTML = 'On'
        // videoPauseGroup.style.display = 'block'

    }
    if (DemoBtn.checked == false) {
        videoDemos.style.display = 'block'
        frontImg.style.display = 'block'
        TextIndicate.innerHTML = 'Off'
        // videoPauseGroup.style.display = 'none'

    }
}



var volOnBtn = document.querySelector('.vol-on')
var volOffBtn = document.querySelector('.vol-off')


volOnBtn.addEventListener('click', () => {
    volOffBtn.style.display = 'block'
    volOnBtn.style.display = 'none'
})
volOffBtn.addEventListener('click', () => {
    volOffBtn.style.display = 'none'
    volOnBtn.style.display = 'block'
})


var ppbutton = document.getElementById("vidbutton");
var playVideoBtn = document.querySelector('.PlayvideoBtn')
var offVideoBtn = document.querySelector('.offVideoBtn')
const audio = document.getElementById('audioplay')
ppbutton.addEventListener("click", playPause);
myVideo = document.getElementById("video-demos");
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        audio.play();
        offVideoBtn.style.display = 'none'
        playVideoBtn.style.display = 'block'
        volOn.style.display = 'none'
        volOff.style.display = 'block'

    }
    else {
        myVideo.pause();
        audio.pause();
        offVideoBtn.style.display = 'block'
        playVideoBtn.style.display = 'none'
        volOn.style.display = 'block'
        volOff.style.display = 'none'

    }
}


const videoPlayer = document.getElementById('video-demos');
const playPauseButton = document.getElementById('vidbutton');
const audioPlayer = document.getElementById('audio-player');
const muteUnmuteButton = document.getElementById('mute-unmute-button');

playPauseButton.addEventListener('click', () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseButton.textContent = 'Pause';
  } else {
    videoPlayer.pause();
    playPauseButton.textContent = 'Play';
  }
});

muteUnmuteButton.addEventListener('click', () => {
  if (audioPlayer.muted) {
    audioPlayer.muted = false;
    muteUnmuteButton.textContent = 'Mute';
  } else {
    audioPlayer.muted = true;
    muteUnmuteButton.textContent = 'Unmute';
  }
});
