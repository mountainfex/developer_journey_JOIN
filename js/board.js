
let tasks = [
    {
    "ID": 0,
    "titles": "Neue Webseite - online Termin",
    "descriptions": "Neue JavaScript Funktionen und Spezial-Effekte müssen noch eingebaut werden",
    "labels": "Design",
    "Personell": "Front-End Developer",
    "Dates": "2023-06-01",
    "Priorities": "Urgent",
    // "Subtasks": subtask,
    "category": "TASKS_todo",
    },
    {
    "ID": 1,
    "titles": "Präsentation",
    "descriptions": "Produktpräsentation unseres neuen Produkts 'Pokemon-Sammelalbum' ",
    "labels": "Marketing",
    "Personell": "Satoshi Nakamoto",
    "Dates": "2023-05-01",
    "Priorities": "Medium",
    // "Subtasks": subtask,
    "category": "TASKS_todo",
    },  
    {
    "ID": 2,
    "titles": "Druckerpapier bestellen",
    "descriptions": "20 Pakete mit 80g-Papier(recyclet)",
    "labels": "Backoffice",
    "Personell": "Sebastian Grundig",
    "Dates": "2023-04-21",
    "Priorities": "Low",
    // "Subtasks": subtask,
    "category": "TASKS_todo",
    },
    {
    "ID": 3,
    "titles": "Kaffee Einkaufen",
    "descriptions": "100 Pack Kaffee (aromatisch)",
    "labels": "Backoffice",
    "Personell": "Sebastian Grundig",
    "Dates": "2023-07-21",
    "Priorities": "Low",
    // "Subtasks": subtask,
    "category": "TASKS_inProgress",
    }
];


/* --Drag'N Drop Funktionen-- */


let currentDraggedElement;


function startDragging(ID) {           // löst den div-Container aus der normalen Strutur - zum Ziehen (Drag) - und weißt gleichzeitig eine eindeutige ID zu
    currentDraggedElement = ID;         
    console.log(currentDraggedElement);
}


function allowDrop(ev) {        // diese Funktion verändert das Standartverhalten von div-Containern, so, dass, wir ein Drag'nDrop-Element überhaupt über einem div-Conatiner abwerfen können
    ev.preventDefault();
  }


function moveTo (category) {
    tasks[currentDraggedElement]['category'] = category; // z.B. das Tasks[{}]-Objekt mit ID 1: Das Feld 'cateory' ändert sich zu 'TASKS_inProgress' oder 'TASKS_todo'
    updateHTML();
}


function updateHTML () {            // diese Renderfunktion filtert die Objekte des JSON-Arrays zunächst nach 'category'. Entsprechend der zugewiesenen 'Standartcategory' werden diese direkt in die jeweiligen TASK-Felder hinein gerendert. Sämtliche JSON-Array Informationen werden durch die for-Schleifen ausgelesen und per 'element' und 'i' weitergegeben an die templatePostit () Funktion.
    let open = tasks.filter(t => t['category'] == 'TASKS_todo');

    document.getElementById('TASKS_todo').innerHTML = '';

    for (let i = 0; i < open.length; i++) {
        const element = open[i];
        document.getElementById('TASKS_todo').innerHTML += templatePostit(element, i);
    }


    let TASKS_inProgress = tasks.filter(t => t['category'] == 'TASKS_inProgress');
    
    document.getElementById('TASKS_inProgress').innerHTML = '';

    for (let i = 0; i < TASKS_inProgress.length; i++) {
        const element = TASKS_inProgress[i];
        document.getElementById('TASKS_inProgress').innerHTML += templatePostit(element, i);
    }


    let TASKS_awaitingFeedback = tasks.filter(t => t['category'] == 'TASKS_awaitingFeedback');
    
    document.getElementById('TASKS_awaitingFeedback').innerHTML = '';

    for (let i = 0; i < TASKS_awaitingFeedback.length; i++) {
        const element = TASKS_awaitingFeedback[i];
        document.getElementById('TASKS_awaitingFeedback').innerHTML += templatePostit(element, i);
    }


    let TASKS_done = tasks.filter(t => t['category'] == 'TASKS_done');
    
    document.getElementById('TASKS_done').innerHTML = '';

    for (let i = 0; i < TASKS_done.length; i++) {
        const element = TASKS_done[i];
        document.getElementById('TASKS_done').innerHTML += templatePostit(element, i);
        
    }

}
 

function templatePostit (element,i, ) {
    return `
        <div draggable="true" ondragstart="startDragging(${element['ID']})" onclick="slideIn(${i})" class="postIt" id="postIt">
        <div class="postItInterior">
            <div class="postIt_Head">
                <div class="postIt_Labels ${element['labels']}">${element['labels']}</div>
                <div class="postIT_Headline">${element['titles']}</div>
                <div class="postIt_TaskDescriptions">${element['descriptions']}</div>
            </div>
            <div class="postIt_Body">
                <div class="postIt_ProgressBar"><i src="assets/img/Frame 141.png"></div>
                <div class="postIt_StatusAccomplished"><img src="assets/img/frame_2 Done.png"></div>
            </div>
            <div class="postIt_Bottom">
                <div class="postIt_Staff"><div class="contact-initials_1"></div><div class="contact-initials_2"></div><div class="contact-initials_3"></div><img src="assets/img/Frame 112.png"></div>
                <div id="postIt_PriorityClass" class="postIt_PriorityClass ${element['Priorities']}"></div>
            </div>
        </div>
    </div>
    `;
}


/*  --PoPup Container--  */


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


    /* --Slide Funktionen--*/


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


/* --Priority Buttons-- */


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



           //generateTodoHTML ()

// function generatePostit(element) {
//     Postit = document.getElementById('TASKS');
//     Postit.innerHTML = '';

//     for (let i = 0; i < tasks.length; i++) {
//         let task = tasks[i];
//         Postit.innerHTML += templatePostit(task,i, element); 
//     }
    
// }


// function generatePostit(element) {
//     Postit = document.getElementById('TASKS');
//     Postit.innerHTML = '';

//     for (let i = 0; i < tasks.length; i++) {
//         let task = tasks[i];
//         Postit.innerHTML += templatePostit(task,i, element); 
//     }
    
// }
// ${element['id']}


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