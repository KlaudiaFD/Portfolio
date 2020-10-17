const btn=document.querySelector('.hamburger');
const brg=document.querySelector('.nav-ul')

const showMenu=()=>{
    brg.classList.toggle('show')
}

btn.addEventListener('click', showMenu);