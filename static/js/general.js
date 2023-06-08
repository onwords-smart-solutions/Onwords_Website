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

// --------
window.addEventListener("scroll", () => {
    var header = document.querySelector("header");
    var navItem = document.querySelector("nav-item");
    header.classList.toggle("sticky", window.scrollY > 0)
    navItem.classList.toogle("nav-a", window.scrollY > 0)
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