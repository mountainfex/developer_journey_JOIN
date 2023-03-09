setURL('https://gruppe-08i.developerakademie.net/smallest_backend_ever');

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

// let rmCheck = document.getElementById('rememberMe');
// let email = document.getElementById('email');

// if(backend.checkbox && backend.checkbox !== "") {
// rmCheck.setAttribute("checked", "checked");
// email.value = backend.email;
// } else {
// rmCheck.removeAttribute("checked");
// email.value = "";
// }


// function lsRememberMe() {
//     if (rmCheck.checked && email.value !== "") {
//         backend.username = email.value;
//         backend.checkbox = rmCheck.value;
//     } else {
//         backend.username = "";
//         backend.checkbox = "";
//     }
//   }

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

const urlParams = new URLSearchParams(window.location.search);
const msg = urlParams.get('msg');
let msgBox = document.getElementById("msgBox");

if(msg){
    msgBox.innerHTML = msg;
} else {
    document.getElementById("msgBox").classList.add("dnone");
}