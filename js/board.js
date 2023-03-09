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

function PopUpContainer_modModus () {
    Container_modModus = document.getElementById('popUpBackground');

    Container_modModus.innerHTML = "";
    Container_modModus.innerHTML = `

        <div id="popUpContainer" class="PopUpContainer">
        <img onclick="slideOut()" class="xicon" src="assets/img/icon-x.svg" alt="">

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
    `

}