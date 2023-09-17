const toggleBtn = document.getElementById('toggle-btn');
const navWrap = document.getElementById('nav-wrap');
const closeBtn = document.getElementById('close-btn');
console.log(closeBtn);

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navWrap.classList.add('visible') 
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    navWrap.classList.remove('visible') 
})