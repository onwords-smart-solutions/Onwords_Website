// const democancel = document.getElementById('democancel')
// const demo = document.getElementById('demo')
// democancel.addEventListener('click', (e) => {
//     event.preventDefault();
//     demo.style.display = 'none'
// })
// --back-top-btn start
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document

// ---strat mouse wheel--
const mouseWheel = document.querySelector('.box-scroll');

mouseWheel.addEventListener('wheel', function (e) {
    const race = 15; // How many pixels to scroll

    if (e.deltaY > 0) // Scroll right
        mouseWheel.scrollLeft += race;
    else // Scroll left
        mouseWheel.scrollLeft -= race;
    e.preventDefault();
});


// -----backtop btn end---
var headBtn = document.getElementById('mydiv')
var btns = headBtn.getElementsByClassName('btns');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        var current = document.getElementsByClassName('act-anim');
        current[0].className = current[0].className.replace("act-anim", "");
        this.className += "act-anim";
    });
}
// ---hue light functionality-----//

function scenery() {
    var scenery = document.getElementById('scenery')
    var dayTv = document.querySelector('.day-tv')
    var nightTv = document.querySelector('.night-tv')
    var sceneryText = document.querySelector('.scenery-text')
    var day = document.querySelector('.day')
    var night = document.querySelector('.night')
    var hueOn = document.querySelector('.hue-on')
    var hueOff = document.querySelector('.hue-off')
    var volumeBlackSlash = document.querySelector('.volume-black-slash')
    var volumeBlack = document.querySelector('.volume-black')
    if (scenery.checked == true) {
        dayTv.style.display = 'none'
        nightTv.style.display = 'none'
        day.style.display = 'none'
        night.style.display = 'block'
        sceneryText.innerHTML = 'Night'
        hueOn.style.display = 'none'
        hueOff.style.display = 'none'
        volumeBlackSlash.style, display = 'none'
        volumeBlack.style, display = 'block'

    }
    if (scenery.checked == false) {
        dayTv.style.display = 'none'
        nightTv.style.display = 'none'
        day.style.display = 'block'
        night.style.display = 'none'
        sceneryText.innerHTML = 'Day'
        hueOn.style.display = 'none'
        hueOff.style.display = 'none'
        volumeBlackSlash.style, display = 'block'
        volumeBlack.style, display = 'none'
    }
}
function tv() {
    var tv = document.getElementById('tv')
    // var dayTv = document.querySelector('.day-tv')
    // var nightTv = document.querySelector('.night-tv')
    var TvText = document.querySelector('.TvText')
    var day = document.querySelector('.day')
    var night = document.querySelector('.night')
    var hue = document.querySelector('.hue')
    var volumeBlackSlash = document.querySelector('.volume-black-slash')
    var volumeBlack = document.querySelector('.volume-black')
    // var hueOff = document.querySelector('.hue-off')
    if (tv.checked == true) {
        day.style.display = 'none'
        night.style.display = 'block'
        hue.style.display = 'none'
        volumeBlackSlash.style, display = 'none'
        volumeBlack.style, display = 'none'
        TvText.innerHTML = 'On'
    }
    if (tv.checked == false) {
        day.style.display = 'block'
        night.style.display = 'none'
        hue.style.display = 'none'
        TvText.innerHTML = 'Off'
        volumeBlackSlash.style, display = 'block'
        volumeBlack.style, display = 'none'
    }
}
function hue() {
    var day = document.querySelector('.day')
    var night = document.querySelector('.night')
    var hue = document.querySelector('.hue')
    // var hueOff = document.querySelector('.hue-off')
    if (hueBtn.checked == true) {
        day.style.display = 'none'
        night.style.display = 'none'
        hue.style.display = 'block'
    }
    if (hueBtn.checked == false) {
        day.style.display = 'none'
        night.style.display = 'block'
        hue.style.display = 'none'
    }
}

// ---hue light functionality-----//
function play() {
    var audio = document.getElementById("audio");
    var volumeBlackSlash = document.querySelector('.volume-black-slash')
    var volumeBlack = document.querySelector('.volume-black')
    var micoff = document.querySelector('.micoff')
    audio.play();
    volumeBlack.style.display = 'block'
    volumeBlackSlash.style.display = 'none'
    micoff.style.display = 'block'
}
function playoff() {
    var audio = document.getElementById("audio");
    var volumeBlackSlash = document.querySelector('.volume-black-slash')
    var volumeBlack = document.querySelector('.volume-black')
    audio.pause();
    volumeBlack.style.display = 'none'
    volumeBlackSlash.style.display = 'block'

}







function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

