
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
var playVideoBtn = document.querySelector('.onVideoBtn')
var offVideoBtn = document.querySelector('.offVideoBtn')
const volOn = document.querySelector('.vol-on')
const volOff = document.querySelector('.vol-off')
const audio = document.getElementById('audioplay')
ppbutton.addEventListener("click", playPause);
myVideo = document.getElementById("video-demos");
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        audio.play();
        offVideoBtn.style.opacity = 'none'
        playVideoBtn.style.opacity = 'block'
        volOn.style.opacity = 'none'
        volOff.style.opacity = 'block'

    }
    else {
        myVideo.pause();
        audio.pause();
        offVideoBtn.style.opacity = 'block'
        playVideoBtn.style.opacity = 'none'
        volOn.style.opacity = 'block'
        volOff.style.opacity = 'none'

    }
}
