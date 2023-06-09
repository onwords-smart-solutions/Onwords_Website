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


const body = document.getElementById('bodyTag');
const button = document.querySelector('#darkbutton');
const nightBtn = document.querySelector('.night')
const sunBtn = document.querySelector('.sun')

function toggleDark() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");
    nightBtn.style.display='block'
    sunBtn.style.display='none'
    
    
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
