// ? Menu Responsive
function menuToggle(){
    const toggle = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}

// ? Cambiar Imagen 
function changeImage(x) {
    document.querySelector('.mountain-dew').src = x;
}


// ? Cambiar Color
function changeColor(color) {
    const section = document.querySelector('.section');
    section.style.background = color
}