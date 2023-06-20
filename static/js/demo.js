
// function scenery() {
//     var scenery = document.getElementById('scenery')
//     var dayTv = document.querySelector('.day-tv')
//     var nightTv = document.querySelector('.night-tv')
//     var sceneryText = document.querySelector('.scenery-text')
//     var day = document.querySelector('.day')
//     var night = document.querySelector('.night')
//     var hueOn = document.querySelector('.hue-on')
//     var hueOff = document.querySelector('.hue-off')
//     var volumeBlackSlash = document.querySelector('.volume-black-slash')
//     var volumeBlack = document.querySelector('.volume-black')
//     if (scenery.checked == true) {
//         dayTv.style.display = 'none'
//         nightTv.style.display = 'none'
//         day.style.display = 'none'
//         night.style.display = 'block'
//         sceneryText.innerHTML = 'Night'
//         hueOn.style.display = 'none'
//         hueOff.style.display = 'none'
//         volumeBlackSlash.style, display = 'none'
//         volumeBlack.style, display = 'block'

//     }
//     if (scenery.checked == false) {
//         dayTv.style.display = 'none'
//         nightTv.style.display = 'none'
//         day.style.display = 'block'
//         night.style.display = 'none'
//         sceneryText.innerHTML = 'Day'
//         hueOn.style.display = 'none'
//         hueOff.style.display = 'none'
//         volumeBlackSlash.style, display = 'block'
//         volumeBlack.style, display = 'none'
//     }
// }
// function tv() {
//     var tv = document.getElementById('tv')
//     // var dayTv = document.querySelector('.day-tv')
//     // var nightTv = document.querySelector('.night-tv')
//     var TvText = document.querySelector('.TvText')
//     var day = document.querySelector('.day')
//     var night = document.querySelector('.night')
//     var hue = document.querySelector('.hue')
//     var volumeBlackSlash = document.querySelector('.volume-black-slash')
//     var volumeBlack = document.querySelector('.volume-black')
//     // var hueOff = document.querySelector('.hue-off')
//     if (tv.checked == true) {
//         day.style.display = 'none'
//         night.style.display = 'block'
//         hue.style.display = 'none'
//         volumeBlackSlash.style, display = 'none'
//         volumeBlack.style, display = 'none'
//         TvText.innerHTML = 'On'
//     }
//     if (tv.checked == false) {
//         day.style.display = 'block'
//         night.style.display = 'none'
//         hue.style.display = 'none'
//         TvText.innerHTML = 'Off'
//         volumeBlackSlash.style, display = 'block'
//         volumeBlack.style, display = 'none'
//     }
// }
// function hue() {
//     var day = document.querySelector('.day')
//     var night = document.querySelector('.night')
//     var hue = document.querySelector('.hue')
//     // var hueOff = document.querySelector('.hue-off')
//     if (hueBtn.checked == true) {
//         day.style.display = 'none'
//         night.style.display = 'none'
//         hue.style.display = 'block'
//     }
//     if (hueBtn.checked == false) {
//         day.style.display = 'none'
//         night.style.display = 'block'
//         hue.style.display = 'none'
//     }
// }

// // ---hue light functionality-----//
// function play() {
//     var audio = document.getElementById("audio");
//     var volumeBlackSlash = document.querySelector('.volume-black-slash')
//     var volumeBlack = document.querySelector('.volume-black')
//     var micoff = document.querySelector('.micoff')
//     audio.play();
//     volumeBlack.style.display = 'block'
//     volumeBlackSlash.style.display = 'none'
//     micoff.style.display = 'block'
// }
// function playoff() {
//     var audio = document.getElementById("audio");
//     var volumeBlackSlash = document.querySelector('.volume-black-slash')
//     var volumeBlack = document.querySelector('.volume-black')
//     audio.pause();
//     volumeBlack.style.display = 'none'
//     volumeBlackSlash.style.display = 'block'

// }


// ------

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
function volon() {
    const volOn = document.querySelector('.vl-on')
    const volOff = document.querySelector('.vl-off')
    const audio = document.getElementById('audioplay')
    volOn.style.display = 'none'
    volOff.style.display = 'block'
    audio.play();
}
function voloff() {
    const volOn = document.querySelector('.vl-on')
    const volOff = document.querySelector('.vl-off')
    const audio = document.getElementById('audioplay')
    volOn.style.display = 'block'
    volOff.style.display = 'none'
    audio.pause();
}
// 
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
        volOn.style.display = 'none'
        volOff.style.display = 'block'

    }
    else {
        myVideo.pause();
        audio.pause();
        offVideoBtn.style.opacity = '1'
        playVideoBtn.style.opacity = '0'
        volOn.style.display = 'block'
        volOff.style.display = 'none'

    }
}

