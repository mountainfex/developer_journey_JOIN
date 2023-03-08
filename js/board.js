
let openbutton = document.getElementById("openPopUpContainer");
let closebutton = document.getElementById("closePopUpContainer");
// let PopUpContainer = document.getElementById("PopUpContainer");
// let popUpBackground = document.getElementById("popUpBackground");

// function openPopUpContainer() {
//     let popUpBackground = document.getElementById('popUpBackground');
//     let PopUpContainer = document.getElementById('PopUpContainer');

//     popUpBackground.classList.remove('d-none');
//     PopUpContainer.classList.remove('d-none');
//     popUpBackground.classList.add('d-on');
//     PopUpContainer.classList.add('d-on');
// }


// let popUpContact = document.getElementById("mainPopUp");
// let popup = document.getElementById("popup");

// function closePopUpContainer() {
//     let popUpBackground = document.getElementById('popUpBackground');
//     let PopUpContainer = document.getElementById('PopUpContainer');

//     popUpBackground.classList.remove('d-on');
//     PopUpContainer.classList.remove('d-on');
//     popUpBackground.classList.add('d-none');
//     PopUpContainer.classList.add('d-none');
// }



function slideIn(){
    let popUpBackground = document.getElementById("popUpBackground");
    let PopUpContainer = document.getElementById("PopUpContainer");
    PopUpContainer.classList.remove('slideout');
    PopUpContainer.classList.add('slidein');
    PopUpContainer.classList.remove("dnone");
    popUpBackground.classList.remove('fadeout');
    popUpBackground.classList.add('fadein');
    popUpBackground.classList.remove('dnone');

} 

function slideOut() {
    let popUpBackground = document.getElementById("popUpBackground");
    let PopUpContainer = document.getElementById("PopUpContainer");
    PopUpContainer.classList.add('slideout');
    popUpBackground.classList.add('fadeout');
    setTimeout(function(){document.getElementById('popUpBackground').classList.add('dnone')}, 500);
    setTimeout(function(){document.getElementById('PopUpContainer').classList.add('dnone')}, 500);
}