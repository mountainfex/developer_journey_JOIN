async function onSubmit(event){
    event.preventDefault();
    let formData = new FormData (event.target);
    let response = await action(formData);
    if(response.ok){
        alert("E-Mail has been send!");
    } else {
        alert("E-Mail has not been send!");
    }
    
}

function action (formData){
    const input = "https://gruppe-08i.developerakademie.net/01Join/php/send_mail.php"
    const requestInit ={
        method: 'post',
        body: formData
    };

    return fetch(
        input,
        requestInit
        );
}