const dayLight = document.getElementById('dayLight')
const night = document.getElementById('night')
const dayBtn = document.getElementById('dayBtn')
const nightBtns = document.getElementById('nightBtn')

dayBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dayLight.style.display = 'block'
    night.style.display = 'none'
})
nightBtns.addEventListener('click', (event) => {
    event.preventDefault();
    dayLight.style.display = 'none'
    night.style.display = 'block'
})

