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

function slideIn(){
    let popup = document.getElementById("popup");
    let popUpContact = document.getElementById("mainPopUp");
    popUpContact.classList.remove('slideout');
    popUpContact.classList.add('slidein');
    popUpContact.classList.remove("dnone");
    popup.classList.remove('fadeout');
    popup.classList.add('fadein');
    popup.classList.remove('dnone');
} 

function slideOut() {
    let popup = document.getElementById("popup");
    let popUpContact = document.getElementById("mainPopUp");
    popUpContact.classList.add('slideout');
    popup.classList.add('fadeout');
    setTimeout(function(){document.getElementById('popup').classList.add('dnone')}, 500);
    setTimeout(function(){document.getElementById('mainPopUp').classList.add('dnone')}, 500);
}