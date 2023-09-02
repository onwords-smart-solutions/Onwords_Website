const toggle = document.getElementById('verticalToggle')
const allLightOn = document.getElementById('alllightOn')
const bolconyLights = document.getElementById('bolconyLightson')
const parkingLights = document.getElementById('parkingLightson')
const allLightOff = document.getElementById('allLightOff')
const bolconyOnBtn = document.getElementById('bolconyOnBtn')
const bolconyOffBtn = document.getElementById('bolconyOffBtn')
const parkingOnBtn = document.getElementById('parkingonBtn')
const parkingOffBtn = document.getElementById('parkingOffBtn')
const bolconys = document.getElementById('bolconys')
const parkings = document.getElementById('parkings')

// function allLightson() {
//     if (toggle.checked == true) {
//         allLightOn.style.display = 'block'
//         allLightOff.style.display = 'none'
//         bolconyOnBtn.style.display = 'block'
//         bolconyOffBtn.style.display = 'none'
//         parkingOffBtn.style.display = 'none'
//         parkingOnBtn.style.display = 'block'
//     }
//     if (toggle.checked == false) {
//         allLightOn.style.display = 'none'
//         allLightOff.style.display = 'block'
//         bolconyOnBtn.style.display = 'none'
//         bolconyOffBtn.style.display = 'block'
//         parkingOffBtn.style.display = 'block'
//         parkingOnBtn.style.display = 'none'
//     }
// }
// function lightmain(){
//     if (toggle.checked == true)  {
//         bolconyOnBtn.style.display = 'block'
//         parkingOnBtn.style.display = 'block'
//         bolconyLights.style.display = 'none'
//         parkingLights.style.display = 'none'
//         allLightOn.style.display = 'block'

//     }
//     if (toggle.checked == false)  {
//         bolconyOnBtn.style.display = 'none'
//         parkingOnBtn.style.display = 'none'
//         bolconyLights.style.display = 'none'
//         parkingLights.style.display = 'none'
//         allLightOn.style.display = 'none'

//     }
// }
function both() {
    if (toggle.checked == true) {
        bolconyOnBtn.style.display = 'block'
        parkingOnBtn.style.display = 'block'
        bolconyLights.style.display = 'none'
        parkingLights.style.display = 'none'
        allLightOn.style.display = 'block'

    }

    if (toggle.checked == false) {
        bolconyOnBtn.style.display = 'none'
        parkingOnBtn.style.display = 'none'
        bolconyLights.style.display = 'none'
        parkingLights.style.display = 'none'
        allLightOn.style.display = 'none'

    }
    if ((bolconys.checked == false) && (parkings.checked == true)) {
        toggle.checked=false
        bolconyOnBtn.style.display = 'none'
        parkingOnBtn.style.display = 'block'
        bolconyLights.style.display = 'none'
        parkingLights.style.display = 'block'
        allLightOn.style.display = 'none'
    }

    if ((bolconys.checked == true) && (parkings.checked == true)) {
        toggle.checked=true
        bolconyOnBtn.style.display = 'block'
        parkingOnBtn.style.display = 'block'
        bolconyLights.style.display = 'none'
        parkingLights.style.display = 'none'
        allLightOn.style.display = 'block'
    }

    if ((bolconys.checked == true) && (parkings.checked == false)) {
        toggle.checked=false
        bolconyOnBtn.style.display = 'block'
        parkingOnBtn.style.display = 'none'
        bolconyLights.style.display = 'block'
        parkingLights.style.display = 'none'
        allLightOn.style.display = 'none'
    }
  
}



// function both() {
//     if (toggle.checked == true) {
//         bolconyOnBtn.style.display = 'block'
//         parkingOnBtn.style.display = 'block'
//         bolconyLights.style.display = 'none'
//         parkingLights.style.display = 'none'
//         allLightOn.style.display = 'block'

//     }
//     if (toggle.checked == false) {
//         bolconyOnBtn.style.display = 'none'
//         parkingOnBtn.style.display = 'none'
//         bolconyLights.style.display = 'none'
//         parkingLights.style.display = 'none'
//         allLightOn.style.display = 'none'

//     }
// }

// function bolconymain() {
//     if (bolconys.checked == true) {
//         bolconyOnBtn.style.display = 'block'
//         parkingOnBtn.style.display = 'none'
//         bolconyLights.style.display = 'block'
//         parkingLights.style.display = 'none'
//         allLightOn.style.display = 'none'
//     }
//     else {
//         bolconyOnBtn.style.display = 'none'
//         parkingOnBtn.style.display = 'none'
//         bolconyLights.style.display = 'none'
//         parkingLights.style.display = 'none'
//         allLightOn.style.display = 'none'
//     }
// }

// function parkingmain() {
//     if (parkings.checked == true) {
//         bolconyOnBtn.style.display = 'none'
//         parkingOnBtn.style.display = 'block'
//         bolconyLights.style.display = 'none'
//         parkingLights.style.display = 'block'
//         allLightOn.style.display = 'none'
//     }
//     else {
//         bolconyOnBtn.style.display = 'none'
//         parkingOnBtn.style.display = 'none'
//         bolconyLights.style.display = 'none'
//         parkingLights.style.display = 'none'
//         allLightOn.style.display = 'none'
//     }
// }
// bolconys.addEventListener('change',()=>{
//     if(parkingmain.checked=true){
//         bolconymain.checked=true
//     }
// })















const times = document.querySelector('.times')
date = new Date()
const timesd = date.getHours() + ":" + date.getMinutes()
times.innerHTML = timesd

// ===========



const blob = document.querySelector('.blob');
const cursorScale = document.querySelectorAll('.cursor-scale')
window.addEventListener('pointermove', (e) => {
    const { clientX, clientY } = e;
    // console.log(clientX, clientY)
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" })
})

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
})


// -------counter start
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1500, 3000);
    counter("count2", 100, 1000, 2500);
    counter("count3", 0, 10000, 3000);
});
// -------counter start


document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky-sl');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

//Scroll function 
function horizontalScroll() {

    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if (stickyPosition > 1) {
        return;
    } else {
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled) * 0.85;

    }
}

// ---------------curtain demos------------

