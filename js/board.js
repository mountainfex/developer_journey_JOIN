
let tasks = [
    {
    "titles": "Neue Webseite - online Termin",
    "descriptions": "Neue JavaScript Funktionen und Spezial-Effekte müssen noch eingebaut werden",
    "labels": "Design",
    "Personell": "Front-End Developer",
    "Dates": "2023-06-01",
    "Priorities": "Urgent",
    // "Subtasks": subtask,
    },
    {
    "titles": "Präsentation",
    "descriptions": "Produktpräsentation unseres neuen Produkts 'Pokemon-Sammelalbum' ",
    "labels": "Marketing",
    "Personell": "Satoshi Nakamoto",
    "Dates": "2023-05-01",
    "Priorities": "Medium",
    // "Subtasks": subtask,
    },  
    {
    "titles": "Druckerpapier bestellen",
    "descriptions": "20 Pakete mit 80g-Papier(recyclet)",
    "labels": "Backoffice",
    "Personell": "Sebastian Grundig",
    "Dates": "2023-04-21",
    "Priorities": "Low",
    // "Subtasks": subtask,
    }
];


function generatePostit() {
    Postit = document.getElementById('TASKS');
    Postit.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        Postit.innerHTML += templatePostit(task,i); 

    }
    
}


function templatePostit (task,i) {
    return `
        <div onclick="slideIn(${i})" class="postIt" id="openPopUpContainer">
        <div class="postItInterior">
            <div class="postIt_Head">
                <div class="postIt_Labels ${task['labels']}">${task['labels']}</div>
                <div class="postIT_Headline">${task['titles']}</div>
                <div class="postIt_TaskDescriptions">${task['descriptions']}</div>
            </div>
            <div class="postIt_Body">
                <div class="postIt_ProgressBar"><i src="assets/img/Frame 141.png"></div>
                <div class="postIt_StatusAccomplished"><img src="assets/img/frame_2 Done.png"></div>
            </div>
            <div class="postIt_Bottom">
                <div class="postIt_Staff"><div class="contact-initials_1"></div><div class="contact-initials_2"></div><div class="contact-initials_3"></div><img src="assets/img/Frame 112.png"></div>
                <div id="postIt_PriorityClass" class="postIt_PriorityClass ${task['Priorities']}"></div>
            </div>
        </div>
    </div>
    `;
}


function renderPopUpContainer(i) {
    regularPopUpContainer = document.getElementById('popUpBackground');
    let task = tasks[i]; 

    regularPopUpContainer.innerHTML = "";
    regularPopUpContainer.innerHTML = `

        <div id="popUpContainer" class="PopUpContainer">
        <img onclick="slideOut()" id="closePopUpContainer" class="xicon" src="assets/img/icon-x.svg" alt="">

        <div class="PopUpInterior">
            <div class="PopUp_Head">
                <div class="PopUp_Labels ${task['labels']}">${task['labels']}</div>
                <div class="PopUp_Headline">${task['titles']}</div>
                <div class="PopUp_Task">${task['descriptions']}</div>
                
            </div>
            <div class="PopUp_Body">
                <div class="PopUp_Body_top">
                    <div class="PopUp_DueDate_1">Due Date:</div>
                    <div class="PopUp_DueDate_2">${task['Dates']}</div>
                </div>
                <div class="PopUp_Body_mid">
                    <div class="PopUp_Priority">Priority:</div>
                    <div class="PopUp_Priority_Label PopUp_${task['Priorities']}"></div>
                </div>
                <div class="PopUp_Body_sub">
                    <div class="PopUp_Assign_title">Assigned to:</div>
                    
                </div>
            </div>
            <div class="PopUp_Bottom">
                <div class="PopUp_Assign_people">
                    <div class="PopUp_Assign_people_logo">XY-Z</div>
                    <div class="PopUp_Assign_people_names">${task['Personell']}</div>
                </div>
            </div>

            <div>
                <button onclick="renderPopUpContainer_modModus (${i})" class="editbtn"><img src="assets/img/pencil-no-bg.svg" alt=""></button>
            </div>
        </div>
    </div>
    `;
}


function slideIn(i){
    let popUpBackground = document.getElementById("popUpBackground");
    let popUpContainer = document.getElementById("popUpContainer");
    popUpContainer.classList.remove('slideout');
    popUpContainer.classList.add('slidein');
    popUpContainer.classList.remove("dnone");
    popUpBackground.classList.remove('fadeout');
    popUpBackground.classList.add('fadein');
    popUpBackground.classList.remove('dnone');
    renderPopUpContainer(i);

} 


function slideOut() {
    let popUpBackground = document.getElementById("popUpBackground");
    let PopUpContainer = document.getElementById("PopUpContainer");
    popUpContainer.classList.add('slideout');
    popUpBackground.classList.add('fadeout');
    setTimeout(function(){document.getElementById('popUpBackground').classList.add('dnone')}, 500);
    setTimeout(function(){document.getElementById('popUpContainer').classList.add('dnone')}, 500);
}


function renderPopUpContainer_modModus (i) {
    Container_modModus = document.getElementById('popUpBackground');

    Container_modModus.innerHTML = "";
    Container_modModus.innerHTML = `

        <div id="popUpContainer" class="PopUpContainer">
        <img onclick="slideOut(); renderPopUpContainer()" class="xicon" src="assets/img/icon-x.svg" alt="">

        <div class="PopUpMM_Interior">
            <div class="PopUpModModus_Head">
            
                <div class="PopUpMM_title">Title</div>
                <input id="PopUpMM_title" placeholder="Enter a title">
                
                <div class="PopUpMM_Description">Description</div>
                <textarea id="PopUpMM_Description_textarea" placeholder="Enter a description"></textarea>
                
            </div>

            <div class="PopUpModModus_Body">
                
                    <div class="PopUpMM_DueDate_1">Due Date</div>
                    <input type="date" id="PopUpMM_dueDate">
                                        
                    <div class="PopUpMM_Priority">Priority</div>
                    <div class="PopUpMM_Priority_Labels">
                        
                        <button onclick="priorityRed()" id="PopUpMM_Priority_Labels_red" class="PopUpMM_Priority_Labels_white">Urgent<img id="urgent_img" src="assets/img/prio-urgent.svg"></button>
                        <button onclick="priorityYellow()" id="PopUpMM_Priority_Labels_yellow" class="PopUpMM_Priority_Labels_white">Medium<img id="medium_img" src="assets/img/prio-medium.svg"></button>
                        <button onclick="priorityGreen()" id="PopUpMM_Priority_Labels_green" class="PopUpMM_Priority_Labels_white">Low<img id="low_img" src="assets/img/prio-low.svg"></button>
                    </div>      
            </div>

            <div class="PopUpModModus_Bottom">
                <div class="PopUpMM_Assign_title">Assigned to</div>
                <select>
                    <option>Select contacts to assign</option>
                    <option>David Eisenberg</option>
                    <option>empty_no Array</option>
                </select>
                <div id ="PopUpMM_Assign_PeopleLogo" class="PopUpMM_Assign_PeopleLogo"></div>
            </div>

            <div>
                <button class="editbtn"><img src="assets/img/pencil-no-bg.svg" alt=""></button>
            </div>
        </div>
    </div>
    </div>
    `;

}

function priorityRed() {
    priority = "Urgent";
    let red = document.getElementById('PopUpMM_Priority_Labels_red');
    let yellow = document.getElementById('PopUpMM_Priority_Labels_yellow');
    let green = document.getElementById('PopUpMM_Priority_Labels_green');

    let urgent_img = document.getElementById('urgent_img');
    let medium_img = document.getElementById('medium_img');
    let low_img = document.getElementById('low_img');
    
    red.classList.add('PopUpMM_Priority_Labels_red');
    yellow.classList.remove('PopUpMM_Priority_Labels_yellow');
    green.classList.remove('PopUpMM_Priority_Labels_green');
    
    urgent_img.src="assets/img/prio_white arrows.svg";
    medium_img.src="assets/img/prio-medium.svg";
    low_img.src="assets/img/prio-low.svg";

    yellow.classList.add('PopUpMM_Priority_Labels_white');
    green.classList.add('PopUpMM_Priority_Labels_white');
    
}


function priorityYellow() {
    priority = "Medium";
    let yellow = document.getElementById('PopUpMM_Priority_Labels_yellow');
    let green = document.getElementById('PopUpMM_Priority_Labels_green');
    let red = document.getElementById('PopUpMM_Priority_Labels_red');

    let medium_img = document.getElementById('medium_img');
    let low_img = document.getElementById('low_img');
    let urgent_img = document.getElementById('urgent_img');
    
    yellow.classList.add('PopUpMM_Priority_Labels_yellow');
    green.classList.remove('PopUpMM_Priority_Labels_green');
    red.classList.remove('PopUpMM_Priority_Labels_red');
    
    medium_img.src="assets/img/Capa 1_equals_evenWhite.svg";
    low_img.src="assets/img/prio-low.svg";
    urgent_img.src="assets/img/prio-urgent.svg";

    green.classList.add('PopUpMM_Priority_Labels_white');
    red.classList.add('PopUpMM_Priority_Labels_white');

}


function priorityGreen() {
    priority = "Low";
    let green = document.getElementById('PopUpMM_Priority_Labels_green');
    let red = document.getElementById('PopUpMM_Priority_Labels_red');
    let yellow = document.getElementById('PopUpMM_Priority_Labels_yellow');

    let low_img = document.getElementById('low_img');
    let urgent_img = document.getElementById('urgent_img');
    let medium_img = document.getElementById('medium_img');
    
    green.classList.add('PopUpMM_Priority_Labels_green');
    red.classList.remove('PopUpMM_Priority_Labels_red');
    yellow.classList.remove('PopUpMM_Priority_Labels_yellow');
    
    low_img.src="assets/img/Capa 1_whiteArrowsDown.svg";
    urgent_img.src="assets/img/prio-urgent.svg";
    medium_img.src="assets/img/prio-medium.svg";

    red.classList.add('PopUpMM_Priority_Labels_white');
    yellow.classList.add('PopUpMM_Priority_Labels_white');

}



// let prioIMGArray = ["assets/img/prio-low.svg", "assets/img/prio-medium.svg", "assets/img/prio-urgent.svg"];

// function prioIMGs(prioAsString) {
//     let prioIMG = document.getElementById('postIt_PriorityClass');

//     for (let index = 0; index < prioIMGArray.length; index++) {
//         let correctPrioIMG = prioIMGArray[index];
//         // let prioString = 
        
//         if (prioAsString == low ) {
//             prioIMG.innerHTML = '';
//             prioIMG.innerHTML = `<img src="assets/img/prio-low.svg">`;
//             // prioIMG = correctPrioIMG
//         }

//         if (prioAsString == middle ) {
//             prioIMG.innerHTML = '';
//             prioIMG.innerHTML = `<img src="assets/img/prio-medium.svg">`;
//             // prioIMG = correctPrioIMG
//         }

//         if (prioAsString == urgent ) {
//             prioIMG.innerHTML = '';
//             prioIMG.innerHTML = `<img src="assets/img/prio-urgent.svg">`;
//             // prioIMG = correctPrioIMG
//         }
//     }
    
//     // prioIMG.innerHTML = '';
//     // prioIMG.innerHTML = `${prioIMG}`;
// }