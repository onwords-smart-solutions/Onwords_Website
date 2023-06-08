
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

    document.addEventListener('mousemove', function(e){
	const x = e.clientX;
	const y = e.clientY;

	secondCircle.style.transform = `translate(${x}px, ${y}px)`;
	mainCircle.style.transform = `translate(${x}px, ${y}px)`;

	const hoverables = document.querySelectorAll('.hoverable');

	Array.from(hoverables).forEach((hoverEl) => {
		hoverEl.addEventListener('mouseover', (e) => {
			mainCircle.classList.add('circle-hide');
			secondCircle.classList.add('circle-scale');
		})
	})

	Array.from(hoverables).forEach((hoverEl) => {
		hoverEl.addEventListener('mouseout', (e) => {
			mainCircle.classList.remove('circle-hide');
			secondCircle.classList.remove('circle-scale');
		})
	});

});
    
// ------



