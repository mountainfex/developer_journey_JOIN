let email = "";
let users;

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
    let users = JSON.parse(backend.getItem('users')) || [];
    let confirmedPassword = document.getElementById("confirmPassword").value;

    let newPassword =  {
        password: confirmedPassword
    }

    users.splice( 1, newPassword);

}