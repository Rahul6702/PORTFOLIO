var menuBar = document.querySelector('#menu-bar');
var navLinks = document.querySelector('.nav-link');

navLinks.style.top = '-450px'

menuBar.onclick = function () {
    if (navLinks.style.top == '-450px') {
        navLinks.style.top = '50px';
        
    } else {
        navLinks.style.top = '-450px'
    }
}

const clock = document.getElementById('clock');
setInterval(function(){
    let date=new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);