// let openbutton = document.querySelector(".button");
// let closebutton = document.querySelector(".xicon");
// let popup = document.querySelector(".popUpBackground");
// let popUpContact = document.querySelector(".popUpContact");

// openbutton.addEventListener('click', () => {
//     console.log('test');
// })

// closebutton.addEventListener('click', () => {
// 	popUpContact.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
// 	setTimeout(() => {
// 		popup.style.display = 'none';
// 	}, 500);
// });

// window.addEventListener('click', (e) => {
// 	if (e.target == document.querySelector('.popup-overlay')) {
// 		popUpContact.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
// 		setTimeout(() => {
// 			popup.style.display = 'none';
// 		}, 500);
// 	}
// });

let openbutton = document.getElementById("openBtn");
let closebutton = document.getElementById("closeBtn");
let popUpContact = document.getElementById("mainPopUp");
let popup = document.getElementById("popup");


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

