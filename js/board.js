function openPopUpContainer() {
    let popUpBackground = document.getElementById('popUpBackground');
    let PopUpContainer = document.getElementById('PopUpContainer');

    popUpBackground.classList.remove('d-none');
    PopUpContainer.classList.remove('d-none');
    popUpBackground.classList.add('d-on');
    PopUpContainer.classList.add('d-on');

}

function closePopUpContainer() {
    let popUpBackground = document.getElementById('popUpBackground');
    let PopUpContainer = document.getElementById('PopUpContainer');

    popUpBackground.classList.remove('d-on');
    PopUpContainer.classList.remove('d-on');
    popUpBackground.classList.add('d-none');
    PopUpContainer.classList.add('d-none');
}