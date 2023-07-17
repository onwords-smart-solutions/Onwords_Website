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
    nav.style.width = '100%'
  }
  else {
    mybutton.style.display = "none";
    whatsapp.style.display = 'none'
    nav.style.width = '80%'

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
const header = document.querySelector('nav')
const privacy = document.querySelectorAll('.privacy-h2')
function toggleDark() {


  if (body.classList.contains('dark')) {
    window.addEventListener("scroll", () => {
      var header = document.querySelectorAll("header");
      header.classList.toggle("light", window.scrollY > 0)
    })
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");
    nightBtn.style.display = 'block'
    sunBtn.style.display = 'none'
    anchor.style.color = '#000'
    for(const privacys in privacy){
      privacys.backgroundColor='#fff'
    }
    
    

  }
  else {
    window.addEventListener("scroll", () => {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0)
    })

    body.classList.add('dark');
    localStorage.setItem("theme", "dark");
    sunBtn.style.display = 'block'
    nightBtn.style.display = 'none'
    for(const privacys in privacy){
      privacys.backgroundColor='#000'
    }
    
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark');
  nightBtn.style.display = 'none';
  sunBtn.style.display = 'block'

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
    nightBtnMob.style.display = 'block'
    sunBtnMob.style.display = 'none'
    for (const footerIcons of footerIcon) {
      footerIcons.style.color = '#fff'
    }


  } else {
    bodyMob.classList.add('dark');
    localStorage.setItem("theme", "dark");
    sunBtnMob.style.display = 'block'
    nightBtnMob.style.display = 'none'
    for (const footerIcons of footerIcon) {
      footerIcons.style.color = '#000'
    }

  }
}

if (localStorage.getItem("theme") === "dark") {
  bodyMob.classList.add('dark');
  nightBtnMob.style.display = 'none';
  sunBtnMob.style.display = 'block'
  for (const footerIcons of footerIcon) {
    footerIcons.style.color = '#fff'
  }
}

document.querySelector('#darkbuttonmob').addEventListener('click', toggleDark);


// ----------------mob nav hamburger-------------

const onBtn = document.querySelector('.onnav')
const offBtn = document.querySelector('.off')
const navbarCollapse = document.querySelector('.collapse')
onBtn.addEventListener('click', () => {
  offBtn.style.display = 'block'
  onBtn.style.display = 'none'
  navbarCollapse.style.display = 'block'
})
offBtn.addEventListener('click', () => {
  onBtn.style.display = 'block'
  offBtn.style.display = 'none'
  navbarCollapse.style.display = 'none'
})



// ----------------mob nav hamburger-------------


document.addEventListener("DOMContentLoaded", function () {
  let lazyloadImages = document.querySelectorAll("img.lazy-load");
  let lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function () {
      let scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }

      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

// ----------------mob nav hamburger-------------

document.addEventListener("DOMContentLoaded", function () {
  let lazyloadImages = document.querySelectorAll("img.lazy-load");
  let lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function () {
      let scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});



// ------------


!(function ($doc, $win) {
  var screenWidth = $win.screen.width / 2,
    screenHeight = $win.screen.height / 2,
    $elems = $doc.getElementsByClassName("elem"),
    validPropertyPrefix = '',
    otherProperty = 'perspective(1000px)',
    elemStyle = $elems[0].style;

  if (typeof elemStyle.webkitTransform == 'string') {
    validPropertyPrefix = 'webkitTransform';
  } else if (typeof elemStyle.MozTransform == 'string') {
    validPropertyPrefix = 'MozTransform';
  }

  $doc.addEventListener('mousemove', function (e) {
    var centroX = e.clientX - screenWidth,
      centroY = screenHeight - (e.clientY + 13),
      degX = centroX * 0.04,
      degY = centroY * 0.02,
      $elem

    for (var i = 0; i < $elems.length; i++) {
      $elem = $elems[i];
      $elem.style[validPropertyPrefix] = otherProperty + 'rotateY(' + degX + 'deg)  rotateX(' + degY + 'deg)';
    };
  });
})(document, window);





