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

// let openbutton = document.getElementById("openBtn");
// let closebutton = document.getElementById("closeBtn");
// let popUpContact = document.getElementById("mainPopUp");


function slideIn(){
    let popup = document.getElementById("popup");
    popup.classList.remove('slideOut');
    popup.classList.add('slidein');
} 

function slideOut() {
    let popup = document.getElementById("popup");
    popup.classList.add('slideOut')
    popup.classList.remove('slidein');
}
