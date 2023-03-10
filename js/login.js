setURL('https://gruppe-08i.developerakademie.net/smallest_backend_ever');

let username = [];
let checkbox = [];

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}

function login (){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let user = users.find(u => u.email == email.value && u.password == password.value);
    if (user) {
        window.location.href = 'summary.html'
    } else {
        shakeElement();
    }
}

function guestLogin(){
    window.location.href = 'summary.html'
}

function shakeElement() {
    let mailShake = document.getElementById("emailShake");
    let passwwordShake = document.getElementById("passwordShake");
    mailShake.classList.add("shake");
    passwwordShake.classList.add("shake")
    setTimeout(function () {
        mailShake.classList.remove("shake");
        passwwordShake.classList.remove("shake");
    }, 1000);
}

// let msgBox = document.getElementById('msgBox');
// setTimeout(function(){msgBox.classList.add('dnone')}, 2000);


function remember(){
const rmCheck = document.getElementById("rememberMe");
const emailInput = document.getElementById("email");

// rmCheck.setAttribute("checked", "checked")


if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
} else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
}
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}