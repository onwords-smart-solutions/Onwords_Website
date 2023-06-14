document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.stickayas');
let stickyParent = document.querySelector('.sticky-parent');
let scrollImg = document.querySelector('.mob-s')

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

//Scroll function 
function horizontalScroll(){

    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        
        return;
    }
    else{
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
        scrollImg.style.transform ='scale(1.1)'
    
    }
}