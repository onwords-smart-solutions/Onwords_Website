window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  var navItem = document.querySelector("nav-item");
  header.classList.toggle("sticky", window.scrollY > 0)
  navItem.classList.toogle("nav-a", window.scrollY > 0)
})

// --fade animation---//
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
// ---fade animation end---//

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

document.getElementById('lightonBtn').addEventListener("click", () => {
  document.getElementById('withlight').style.display = 'block'
  document.getElementById('withoutlight').style.display = 'none'
  document.querySelector('.btns-on').style.display = 'none'
  document.querySelector('.btns-off').style.display = 'block'

})
document.getElementById('lightoffBtn').addEventListener("click", () => {
  document.getElementById('withlight').style.display = 'none'
  document.getElementById('withoutlight').style.display = 'block'
  document.querySelector('.btns-on').style.display = 'block'
  document.querySelector('.btns-off').style.display = 'none'

})


document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky-sl');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

//Scroll function 
function horizontalScroll(){

    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
    
    }
}

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
  counter("count3", 0, 900, 3000);
});
// -------counter start

let mybutton = document.getElementById("btn-back-to-top");
let whatsapp = document.getElementById("whatsapp")

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
    } else {
        mybutton.style.display = "none";
        whatsapp.style.display = 'none'
    }
}

