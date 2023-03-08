
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



let contacts = [
    {
        id: 0,
        "firstname": "Anton",
        "surname": "Mayer",
        "email": "antom@gmail.com",
        "phone": "+49 1111 111 11 1",
    },
    {
        id: 1,
        "firstname": "Anja",
        "surname": "Schulz",
        "email": "schulz@hotmail.com",
        "phone": "+49 1111 111 11 1",
    },
    {
        id: 2,
        "firstname": "Benedikt",
        "surname": "Ziegler",
        "email": "benedikt@gmail.com",
        "phone": "+49 1111 111 11 1",
    },
    {
        id: 3,
        "firstname": "David",
        "surname": "Eisenberg",
        "email": "davidberg@gmail.com",
        "phone": "+49 1111 111 11 1",
    },
    {
        id: 4,
        "firstname": "Eva",
        "surname": "Fischer",
        "email": "eva@gmail.com",
        "phone": "+49 1111 111 11 1",
    },
    {
        id: 5,
        "firstname": "Emmanuel",
        "surname": "Mauer",
        "email": "emmanuelMa@gmail.com",
        "phone": "+49 1111 111 11 1",
    }
];

let sortetcontactlist = [];
let letters = [];
// funktionen aufruf 
function contactinit(){
    generateLetters();
    renderLetters();
    generateContactsList();
}
// firstletter sort and generate
function generateLetters(){
    for (let i = 0; i < contacts.length; i++) {
        let firstletter = contacts[i]["firstname"].charAt(0);
        // console.log(firstletter);
        // wenn letters ein A ist und es nicht ein A beinhaltet 
        if (!letters.includes(firstletter)) {  
            letters.push(firstletter);
            letters.sort(); 
        }     
    }
}

function renderLetters() {
    let contact = document.getElementById('contact-list');
    contact.innerHTML = '';
    for (let i = 0; i < letters.length; i++) {
        let firstLetter = letters[i];
        contact.innerHTML += renderContacts(firstLetter, i);
        
    }
}
function renderContacts(firstLetter, i){
    return`
    <div class="contact-letter" id="contact-letter">${firstLetter}</div>
    <div class="contact-border" id="contact-border"></div>
    <div class="contact-list-order" id="contact-list-order${firstLetter}">
            
    </div>
    
    `;
}
function generateContactsList(){
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        let firstletter = contacts[i]["firstname"].charAt(0);
        renderContactlist(i, contact, firstletter);
    }
}
function renderContactlist(i, contact, firstletter){
    let contactlist = document.getElementById(`contact-list-order${firstletter}`);
    contactlist.innerHTML += `
    <div class="contact-list-content" id="contact-list-content${i}" onclick="openContact(${i})">
        <div class="contact-initials" id="contact-initials">${contact["firstname"].charAt(0)}${contact["surname"].charAt(0)}
        </div>
        <div class="contact-name" id="contact-name">
            <span>${contact["firstname"]} ${contact["surname"]}</span>
            <a href="mailto: ${contact["email"]}">${contact["email"]}</a>
        </div>
    </div>`;
}

function openContact(i){
    let contact = contacts[i];
    console.log(contact);
    let contactopen = document.getElementById('contact-selection');
    contactopen.innerHTML = "";
    contactopen.innerHTML = renderOpenContact(contact);
}

function renderOpenContact(contact){
    return`    
                    <div class="contact-sel-content">
                        <div class="contact-selection-initials" style="background: #FF7A00;">${contact["firstname"].charAt(0)}${contact["surname"].charAt(0)}
                        </div>
                        <div class="contact-selecetion-header">
                            <span>${contact["firstname"]} ${contact["surname"]}</span>
                            <div class="contact-add-task">
                                <img src="assets/img/icon-plus-addtask.svg">
                                <span>Add Task</span>
                            </div>
                        </div>
                    </div>
                    <div class="contact-information-edit">
                        <span>Contact Information</span>
                        <div class="contact-information-edit-button">
                            <img src="assets/img/pencil-no-bg.svg">
                            <span>Edit Contact</span>
                        </div>
                    </div>
                    <div class="contact-information-mailphone">
                        <span>Email</span>
                        <a href="mailto: ${contact["email"]}">${contact["email"]}</a>
                        <span>Phone</span>
                        <a href="${contact["phone"]}" class="phone">${contact["phone"]}</a>
                    </div>   
    
    `;
}