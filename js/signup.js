let users  = [
    {}
];

function addUser(){
    let name = document.getElementById('inputName');
    let email = document.getElementById('inputEmail');
    let password = document.getElementById('inputPassword');

    users.push({name: name.value, email: email.value, password: password.value})
    //weiterleitung zu Login-Seite
    window.location.href = 'index.html?msg=Du hast dich erfolgreich registriert!'
}