let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bi-list');
  menu.classList.toggle('bi-x-lg');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('bi-arrow-left-short')
  navbar.classList.remove('active')
}

document.querySelectorAll('.image-slider img').forEach(images => {

  images.onclick = () =>{

    var src = images.getAttribute('src');
    document.querySelector('.main-home-image').src = src;

  }


});