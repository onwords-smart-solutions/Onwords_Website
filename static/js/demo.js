const curtainVid = document.getElementById('curtain-demos')
const curtainOpen = document.getElementById('curtain-open')
const curtainCloseImg = document.getElementById('curtainCloseImg')
const openCurtainBtn = document.getElementById('opencurtainBtn')
const closeCurtainBtn = document.getElementById('closecurtainBtn')

openCurtainBtn.addEventListener('click',()=>{
    curtainOpen.play();
    openCurtainBtn.classList.add('actcurtain')
    closeCurtainBtn.classList.remove('actcurtain')
    curtainOpen.style.display='block'
    curtainCloseImg.style.display='none'
    curtainVid.style.display='none'
})
closeCurtainBtn.addEventListener('click',()=>{
    curtainVid.play();
    openCurtainBtn.classList.remove('actcurtain')
    closeCurtainBtn.classList.add('actcurtain')    
    curtainCloseImg.style.display='none'
    curtainOpen.style.display='none'
    curtainVid.style.display='block'
})
