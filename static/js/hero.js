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

function allLightson() {
    if (toggle.checked == true) {
        allLightOn.style.display = 'block'
        allLightOff.style.display = 'none'
        bolconyOnBtn.style.display='block'
        bolconyOffBtn.style.display='none'
        parkingOffBtn.style.display='none'
        parkingOnBtn.style.display='block'
    }
    if(toggle.checked == false) {
        allLightOn.style.display = 'none'
        allLightOff.style.display = 'block'
        bolconyOnBtn.style.display='none'
        bolconyOffBtn.style.display='block'
        parkingOffBtn.style.display='block'
        parkingOnBtn.style.display='none'
    }
}
function bolcony(){
    if(bolconys.checked == true){
        bolconyOnBtn.style.display='block'
        bolconyLights.style.display='block'
        allLightOff.style.display='none'
        allLightOn.style.display='none'
        parkingOffBtn.style.display='block'
        parkingOnBtn.style.display='none'
    }
    if(bolconys.checked == false){
        bolconyOnBtn.style.display='none'
        bolconyLights.style.display='none'
        allLightOff.style.display='block'
        allLightOn.style.display='none'
        parkingOffBtn.style.display='block'
        parkingOnBtn.style.display='none'
    }

}
// function both(){
//     if((bolconys.checked ==true)&&(parkings.checked ==false)){
//         allLightOn.style.display = 'none'
//         allLightOff.style.display = 'none'
//         bolconyOnBtn.style.display='block'
//         bolconyOffBtn.style.display='none'
//         parkingOffBtn.style.display='block'
//         parkingOnBtn.style.display='none'
//         bolconyLights.style.display='block'
//         parkingLights.style.display='none'
//     }
//     if((bolconys.checked ==false)&&(parkings.checked ==true)){
//         allLightOn.style.display = 'none'
//         allLightOff.style.display = 'none'
//         bolconyOnBtn.style.display='none'
//         bolconyOffBtn.style.display='block'
//         parkingOffBtn.style.display='none'
//         parkingOnBtn.style.display='block'
//         bolconyLights.style.display='block'
//         parkingLights.style.display='none'
//     }
// }

function parking(){
    if(parkings.checked == true){
        parkingLights.style.display='block'
        parkingOnBtn.style.display='block'
        parkingOffBtn.style.display='none'
        allLightOn.style.display='none'
        allLightOff.style.display='none'
        bolconyOffBtn.style.display='block'
        bolconyOnBtn.style.display='none'
    }
    if(parkings.checked == false){
        parkingLights.style.display='none'
        parkingOnBtn.style.display='none'
        parkingOffBtn.style.display='block'
        allLightOn.style.display='none'
        allLightOff.style.display='block'
        bolconyOffBtn.style.display='block'
        bolconyOnBtn.style.display='none'
    }
}

