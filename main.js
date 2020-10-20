const btn=document.querySelector('.hamburger');
const brg=document.querySelector('.nav-desktop')


btn.addEventListener('click', () => {
    brg.classList.toggle('show')
});
