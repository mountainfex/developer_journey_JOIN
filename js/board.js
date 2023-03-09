function slideIn(){
    let popUpBackground = document.getElementById("popUpBackground");
    let popUpContainer = document.getElementById("popUpContainer");
    popUpContainer.classList.remove('slideout');
    popUpContainer.classList.add('slidein');
    popUpContainer.classList.remove("dnone");
    popUpBackground.classList.remove('fadeout');
    popUpBackground.classList.add('fadein');
    popUpBackground.classList.remove('dnone');

} 

function slideOut() {
    let popUpBackground = document.getElementById("popUpBackground");
    let PopUpContainer = document.getElementById("PopUpContainer");
    popUpContainer.classList.add('slideout');
    popUpBackground.classList.add('fadeout');
    setTimeout(function(){document.getElementById('popUpBackground').classList.add('dnone')}, 500);
    setTimeout(function(){document.getElementById('popUpContainer').classList.add('dnone')}, 500);
}

