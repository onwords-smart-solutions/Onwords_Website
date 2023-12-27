var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("team-btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

const allBtn = document.querySelector('.allBtn')
const managementBtn = document.querySelector('.managementBtn')
const rndBtn = document.querySelector('.rndBtn')
const itBtn = document.querySelector('.itBtn')
const prBtn = document.querySelector('.prBtn')
const civilBtn = document.querySelector('.civilBtn')
const hrBtn = document.querySelector('.hrBtn')
const installationBtn = document.querySelector('.installationBtn')
const all = document.getElementById('all')
const management = document.getElementById('management')
const rnd = document.getElementById('rnd')
const it = document.getElementById('it')
const pr = document.getElementById('pr')
const civil = document.getElementById('civil')
const hr = document.getElementById('hr')
const installation = document.getElementById('installation')

allBtn.addEventListener('click', () => {
    all.style.display = 'block'
    management.style.display = 'none'
    rnd.style.display = 'none'
    it.style.display = 'none'
    pr.style.display = 'none'
    civil.style.display = 'none'
    hr.style.display = 'none'
    installation.style.display = 'none'
})

managementBtn.addEventListener('click', () => {
    all.style.display = 'none'
    management.style.display = 'block'
    rnd.style.display = 'none'
    it.style.display = 'none'
    pr.style.display = 'none'
    civil.style.display = 'none'
    hr.style.display = 'none'
    installation.style.display = 'none'
})
rndBtn.addEventListener('click', () => {
    all.style.display = 'none'
    management.style.display = 'none'
    rnd.style.display = 'block'
    it.style.display = 'none'
    pr.style.display = 'none'
    civil.style.display = 'none'
    hr.style.display = 'none'
    installation.style.display = 'none'
})
itBtn.addEventListener('click', () => {
    all.style.display = 'none'
    management.style.display = 'none'
    rnd.style.display = 'none'
    it.style.display = 'block'
    pr.style.display = 'none'
    civil.style.display = 'none'
    hr.style.display = 'none'
    installation.style.display = 'none'
})
prBtn.addEventListener('click', () => {
    all.style.display = 'none'
    management.style.display = 'none'
    rnd.style.display = 'none'
    it.style.display = 'none'
    pr.style.display = 'block'
    civil.style.display = 'none'
    hr.style.display = 'none'
    installation.style.display = 'none'
})
civilBtn.addEventListener('click', () => {
    all.style.display = 'none'
    management.style.display = 'none'
    rnd.style.display = 'none'
    it.style.display = 'none'
    pr.style.display = 'none'
    civil.style.display = 'block'
    hr.style.display = 'none'
    installation.style.display = 'none'
})

installationBtn.addEventListener('click', () => {
    all.style.display = 'none'
    management.style.display = 'none'
    rnd.style.display = 'none'
    it.style.display = 'none'
    pr.style.display = 'none'
    civil.style.display = 'none'
    hr.style.display = 'none'
    installation.style.display = 'block'
})

hrBtn.addEventListener('click', () => {
    all.style.display = 'none'
    management.style.display = 'none'
    rnd.style.display = 'none'
    it.style.display = 'none'
    pr.style.display = 'none'
    civil.style.display = 'none'
    hr.style.display = 'block'
    installation.style.display = 'none'
})