
        // let firstbtn = document.getElementById("BtnOne")
        // let sectbtn = document.getElementById("BtnTwo")
        // let thirdtbtn = document.getElementById("BtnThree")
        // let secOne = document.getElementById("secOne")
        // let secTwo = document.getElementById("secTwo")
        // let secThree = document.getElementById("secThree")

        // firstbtn.addEventListener('click', function () {
        //     secOne.style.display = 'block'
        //     secTwo.style.display = 'none'
        //     secThree.style.display = 'none'
        //     firstbtn.classList.add('btn-bor-1')
        //     sectbtn.classList.remove('btn-bor-2')
        //     thirdbtn.classList.remove('btn-bor-3')
        // })
        // sectbtn.addEventListener('click', function () {
        //     secOne.style.display = 'none'
        //     secTwo.style.display = 'block'
        //     secThree.style.display = 'none'
        //     firstbtn.classList.remove('btn-bor-1')
        //     sectbtn.classList.add('btn-bor-2')
        //     thirdbtn.classList.remove('btn-bor-3')

        // })
        // thirdtbtn.addEventListener('click', function () {
        //     secOne.style.display = 'none'
        //     secTwo.style.display = 'none'
        //     secThree.style.display = 'block'
        //     firstbtn.classList.remove('btn-bor-1')
        //     sectbtn.classList.remove('btn-bor-2')
        //     thirdbtn.classList.add('btn-bor-3')

        // })


  
        const galBtnOne = document.getElementById('one-gal-btn')
        const galBtnTwo = document.getElementById('two-gal-btn')
        const galBtnThree = document.getElementById('three-gal-btn')
        const galOne =document.getElementById('gal-1')
        const galTwo =document.getElementById('gal-2')
        const galThree =document.getElementById('gal-3')

        galBtnOne.addEventListener('click',()=>{
            galOne.style.display='block'
            galTwo.style.display='none'
            galThree.style.display='none'
            galBtnOne.classList.add('act-galleryOne')
            galBtnTwo.classList.remove('act-gallery-two')
            galBtnThree.classList.remove('act-gallery-three')
        })
        galBtnTwo.addEventListener('click',()=>{
            galOne.style.display='none'
            galTwo.style.display='block'
            galThree.style.display='none'
            galBtnOne.classList.remove('act-galleryOne')
            galBtnTwo.classList.add('act-gallery-two')
            galBtnThree.classList.remove('act-gallery-three')
        })
        galBtnThree.addEventListener('click',()=>{
            galOne.style.display='none'
            galTwo.style.display='none'
            galThree.style.display='block'
            galBtnOne.classList.remove('act-galleryOne')
            galBtnTwo.classList.remove('act-gallery-two')
            galBtnThree.classList.add('act-gallery-three')
        })