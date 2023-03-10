// function renderPostit() {
//     Postit = document.getElementById('dragNdrop_1_toDo');
//     Postit.innerHTML = '';

//     for (let i = 0; i < tasks.length; i++) {
//         let task = tasks[i];
//         Postit.innerHTML += templatePostit(task, i);
//     }  
// }
/* wie können wir für die function renderPostit() von dieser js-Datei aus auf ein array in der Datei add_tasks.js zugreifen*/

// function templatePostit (task, i) {
//     return `
//         <div onclick="slideIn()" class="postIt" id="openPopUpContainer">
//             <div class="postItInterior">
//                 <div class="postIt_Head">
//                     <div class="postIt_Labels">Design</div>
//                     <div class="postIT_Headline">Webdesign redesign</div>
//                     <div class="postIt_Task">Modify the contents of the main website...</div>
//                 </div>
//                 <div class="postIt_Body">
//                     <div class="postIt_ProgressBar"><img src="assets/img/Frame 141.png"></div>
//                     <div class="postIt_StatusAccomplished"><img src="assets/img/frame_2 Done.png"></div>
//                 </div>
//                 <div class="postIt_Bottom">
//                     <div class="postIt_Staff"><div class="contact-initials_1"></div><div class="contact-initials_2"></div><div class="contact-initials_3"></div><img src="assets/img/Frame 112.png"></div>
//                     <div class="postIt_PriorityClass"><img src="assets/img/Frame 111.png"></div>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// function renderPopUpTask () {

// }


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


function renderPopUpContainer_modModus () {
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


function renderPopUpContainer() {
    regularPopUpContainer = document.getElementById('popUpBackground');

    regularPopUpContainer.innerHTML = "";
    regularPopUpContainer.innerHTML = `

        <div id="popUpContainer" class="PopUpContainer">
        <img onclick="slideOut()" id="closePopUpContainer" class="xicon" src="assets/img/icon-x.svg" alt="">

        <div class="PopUpInterior">
            <div class="PopUp_Head">
                <div class="PopUp_Labels">Sales</div>
                <div class="PopUp_Headline">Call potential Clients</div>
                <div class="PopUp_Task">Make the product presentation to prospective buyers</div>
                
            </div>
            <div class="PopUp_Body">
                <div class="PopUp_Body_top">
                    <div class="PopUp_DueDate_1">Due Date:</div>
                    <div class="PopUp_DueDate_2">05-08-2022</div>
                </div>
                <div class="PopUp_Body_mid">
                    <div class="PopUp_Priority">Priority:</div>
                    <div class="PopUp_Priority_Label"><img class="PopUp_Priority_Label_imgs" src="assets/img/cardUrgent.png"></div>
                </div>
                <div class="PopUp_Body_sub">
                    <div class="PopUp_Assign_title">Assigned to:</div>
                    
                </div>
            </div>
            <div class="PopUp_Bottom">
                <div class="PopUp_Assign_people">
                    <div class="PopUp_Assign_people_logo">DE</div>
                    <div class="PopUp_Assign_people_names">David Eisenberg</div>
                </div>
            </div>

            <div>
                <button onclick="renderPopUpContainer_modModus ()" class="editbtn"><img src="assets/img/pencil-no-bg.svg" alt=""></button>
            </div>
        </div>
    </div>
    `;
}


