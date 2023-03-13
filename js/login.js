setURL('https://gruppe-08i.developerakademie.net/smallest_backend_ever');

async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    messageBox();
}

function messageBox(){
    let message = document.getElementById('msgBox');
    setInterval(function(){message.classList.add('fadeout')}, 2750);
    setTimeout(function(){message.classList.add('dnone')}, 3000);
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






