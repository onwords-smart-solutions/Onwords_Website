let mybutton = document.getElementById("btn-back-to-top");
let whatsapp = document.getElementById("whatsapp")
var nav = document.querySelector('nav')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
        whatsapp.style.display = 'block'
        nav.style.width='100%'
        
    } else {
        mybutton.style.display = "none";
        whatsapp.style.display = 'none'
        nav.style.width='80%'
        
    }
}

// --------
window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
  })

//   ------

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

const body = document.getElementById('bodyTag');
const button = document.querySelector('#darkbutton');
const nightBtn = document.querySelector('.night')
const sunBtn = document.querySelector('.sun')
const anchor = document.querySelector('a')

function toggleDark() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");
    nightBtn.style.display='block'
    sunBtn.style.display='none'
    anchor.style.color='#000'

   
  } else {
    body.classList.add('dark');
    localStorage.setItem("theme", "dark");
    sunBtn.style.display='block'
    nightBtn.style.display='none'
    
    
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark');
  nightBtn.style.display='none';
  sunBtn.style.display='block'
}

document.querySelector('#darkbutton').addEventListener('click', toggleDark);




// ======

const bodyMob = document.getElementById('bodyTag');
const buttonMob = document.querySelector('#darkbutton');
const nightBtnMob = document.querySelector('.nightmob')
const sunBtnMob = document.querySelector('.sunmob')
const anchorMob = document.querySelector('a')
const footerIcon = document.querySelectorAll('.footer-social-icon')

function toggleDark() {
  if (bodyMob.classList.contains('dark')) {
    bodyMob.classList.remove('dark');
    localStorage.setItem("theme", "light");
    nightBtnMob.style.display='block'
    sunBtnMob.style.display='none'
    for(const footerIcons of footerIcon){
      footerIcons.style.color='#fff'
    }

   
  } else {
    bodyMob.classList.add('dark');
    localStorage.setItem("theme", "dark");
    sunBtnMob.style.display='block'
    nightBtnMob.style.display='none'
    for(const footerIcons of footerIcon){
      footerIcons.style.color='#000'
    }
  
  }
}

if (localStorage.getItem("theme") === "dark") {
  bodyMob.classList.add('dark');
  nightBtnMob.style.display='none';
  sunBtnMob.style.display='block'
  for(const footerIcons of footerIcon){
    footerIcons.style.color='#fff'
  }
}

document.querySelector('#darkbuttonmob').addEventListener('click', toggleDark);


// ----------------mob nav hamburger-------------

const onBtn = document.querySelector('.onnav')
const offBtn = document.querySelector('.off') 
const navbarCollapse = document.querySelector('.collapse') 
onBtn.addEventListener('click',()=>{
    offBtn.style.display='block'
    onBtn.style.display='none'
    navbarCollapse.style.display='block'
})
offBtn.addEventListener('click',()=>{
    onBtn.style.display='block'
    offBtn.style.display='none'
    navbarCollapse.style.display='none'
})


// ----------------mob nav hamburger-------------