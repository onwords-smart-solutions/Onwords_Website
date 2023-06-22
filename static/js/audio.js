
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
const volOn = document.querySelector('.vl-on')
const volOff = document.querySelector('.vl-off')
const audio = document.getElementById('audioplay')
ppbutton.addEventListener("click", playPause);
myVideo = document.getElementById("video-demos");
function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        audio.play();
        offVideoBtn.style.opacity = '0'
        playVideoBtn.style.opacity = '1'
        volOn.style.opacity = '0'
        volOff.style.opacity = '1'

    }
    else {
        myVideo.pause();
        audio.pause();
        offVideoBtn.style.opacity = '1'
        playVideoBtn.style.opacity = '0'
        volOn.style.opacity = '1'
        volOff.style.opacity = '0'

    }
}
