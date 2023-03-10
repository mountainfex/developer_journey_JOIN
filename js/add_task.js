let tasks = [];
let priority = [];
let subTasks = [];

function pushTask () {
        let title = document.getElementById('input_Title').value;
        let description = document.getElementById('textarea_Description').value;
        let label = document.getElementById('label_input_Select').value;
        let staff = document.getElementById('staff_input_Select').value;
        let dueDate = document.getElementById('dueDate_input_Select').value;
        // let subtask = document.getElementById('subtask_input').value;
        let prio = priority;

        let data = {
                "titles": title,
                "descriptions": description,
                "labels": label,
                "Personell": staff,
                "Dates": dueDate,
                "Priorities": prio,
                // "Subtasks": subtask,
              };

        tasks.push(data);
        console.log(tasks);
}


        /*      Priority-BUTTONS       */

        
function priorityRed() {
        priority = "urgent";
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
        priority = "middle";
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
        priority = "low";
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




function renderSubTask() {
        document.getElementById("subtasksCheckbox").innerHTML = ``;
        for (let subTaskIndex = 0; subTaskIndex < subTasks.length; subTaskIndex++) {
               let  subTask = subTasks[subTaskIndex];
                document.getElementById("subtasksCheckbox").innerHTML += showSubtaskCheckbox(subTask, subTaskIndex);
        }
}


function showSubtaskCheckbox(subTask, subTaskIndex) {
        return /*html*/ `
        <div id="subTask_${subTaskIndex}" class="subtasks">
          <span>${subTask.title}</span> 
          <img src="assets/img/icons-cancel.svg" onclick="deleteSubTaskAdd(${subTaskIndex})" class="subtasks-trash" alt="cancel"> 
        </div>
      `;
      }

function deleteSubTaskAdd(subTaskIndex) {
        document.getElementById(`subTask_${subTaskIndex}`).innerHTML = ``;
        subTasks.splice(subTaskIndex, 1);
      }

      function pushSubtasks() {
        let newSubTaskText = document.getElementById('subtask_input').value;
        let emptySubTaskText = document.getElementById('empty_subtask_text');
        emptySubTaskText.innerHTML = '';
        isNewSubTask(newSubTaskText, emptySubTaskText);
      }

      function isNewSubTask(newSubTaskText, emptySubTaskText) {
        let subTaskInput = document.getElementById("subtask_input")
        if (newSubTaskText.length > 0) {
         let newSubTask = {
            'title': newSubTaskText,
            
          }
          subTasks.push(newSubTask)
          renderSubTask(newSubTask);
          document.getElementById('subtask_input').value = ``
        } else if (newSubTaskText.length == 0) {
          subTaskInput.placeholder = 'Please enter a subtask!';
          setTimeout(() => {
            subTaskInput.placeholder = 'Add a new subtask!';
          }, 2000);
        }
      }

      function clearSubTasks() {
        if (document.getElementById('subtask_input').value != null) {
          document.getElementById("subtask_input").value = '';
        }
      }
      