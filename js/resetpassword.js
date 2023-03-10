let email = "";
let users;

function onPageLoad(){
    email = getEmailURLParameter();
    users = getUsers();
}

function getEmailURLParameter(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email');
    return email;
}

function getUsers(){
    return JSON.parse(backend.getItem('users')) || [];
}

function onSubmit(event){
    event.preventDefault();
}