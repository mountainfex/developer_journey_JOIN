let email = "";
let users;

// async function init() {
//     setURL('https://gruppe-08i.developerakademie.net/smallest_backend_ever');
//     await downloadFromServer();
//     users = JSON.parse(backend.getItem('users')) || [];
// }


function onPageLoad(){
    email = getEmailURLParameter();
}

function getEmailURLParameter(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email');
    return email;
}

function onSubmit(event){
    event.preventDefault();
}

function resetPassword(){
    let confirmedPassword = document.getElementById("confirmPassword").value;

    let newPassword =  {password: confirmedPassword}

    users.splice(1, newPassword);
}