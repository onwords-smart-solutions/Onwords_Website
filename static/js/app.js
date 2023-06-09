function scrollTo(scrolled) {
    $('.slider-gallery').css('transform', 'translateX(' + scrolled + 'px');
}
$(window).bind('scroll', function () {
    var scrolled = $(window).scrollTop();
    scrollTo(-scrolled);
});


"use strict"

// Adding scroll event listener
document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky-h');
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



</script>


<script>
var carousel = $(".carousela"),
    currdeg = 0;

$(".nexta").on("click", { d: "n" }, rotate);
$(".preva").on("click", { d: "p" }, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "-webkit-transform": "rotateY(" + currdeg + "deg)",
        "-moz-transform": "rotateY(" + currdeg + "deg)",
        "-o-transform": "rotateY(" + currdeg + "deg)",
        "transform": "rotateY(" + currdeg + "deg)"
    });
}