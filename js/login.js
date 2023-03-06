function login (){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let user = users.find(u => u.email == email.value && u.password == password.value);
    console.log(user);
    if (user) {
        console.log('user gefunden')
    }
}

const urlParams = new URLSearchParams(window.location.search);
const msg = urlParams.get('msg');
let msgBox = document.getElementById("msgBox");

if(msg){
    msgBox.innerHTML = msg;
} else {
    document.getElementById("msgBox").classList.add("dnone");
}