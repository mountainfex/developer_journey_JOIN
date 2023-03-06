

let openbutton = document.getElementById("openBtn");
let closebutton = document.getElementById("closeBtn");

let popUpContact = document.getElementById("mainPopUp");


function slideIn(){
    // let popup = document.getElementById("popup");
    let popUpContact = document.getElementById("mainPopUp");
	popUpContact.classList.add('slidein');
    // popUpContact.classList.remove('slideout');
    // popup.classList.remove();
    // popup.classList.add();
    
} 

function slideOut() {
    let popup = document.getElementById("popup");
    popUpContact.classList.remove('slidein');
    popup.classList.remove();
    popup.classList.add();
    popUpContact.classList.add('slideout');
    // setTimeout(popuptimeout, 600);

}

function popuptimeout() {
    let popUpContact = document.getElementById("mainPopUp");
    // popUpContact.classList.add('dnone');

}