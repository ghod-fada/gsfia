let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

function toggleIcon() {
    var iconElement = document.getElementById("menu-btn");
    if (iconElement.classList.contains("fa-bars")) {
      iconElement.classList.remove("fa-bars");
      iconElement.classList.add("fa-times");
    } else {
      iconElement.classList.remove("fa-times");
      iconElement.classList.add("fa-bars");
    }
  }