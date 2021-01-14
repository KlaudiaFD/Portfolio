const btn=document.querySelector('.hamburger');
const brg=document.querySelector('.nav-desktop');
const ul=document.querySelector('.nav-ul');
const li=document.querySelector('ul li');
const show=document.querySelector('.show');

btn.addEventListener('click', () => {
    brg.classList.toggle('show');
    
});



ul.addEventListener('click', ()=>{
    brg.classList.remove('show');
});


