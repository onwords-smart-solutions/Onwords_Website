const dayLight = document.getElementById('dayLight')
const night = document.getElementById('night')
const dayBtn = document.getElementById('dayBtn')
const nightBtn = document.getElementById('nightBtn')

dayBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dayLight.style.display = 'block'
    night.style.display = 'none'
})
nightBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dayLight.style.display = 'none'
    night.style.display = 'block'
})

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})