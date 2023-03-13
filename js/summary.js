setURL('https://gruppe-08i.developerakademie.net/smallest_backend_ever');

async function init(){
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
    getSummaryContent();
}

function getSummaryContent(){
    let summary = document.getElementById('summaryContent');
    for (let i = 0; i < users.length; i++) {
        let singleUser = users[i];
        let username = singleUser.name;
        summary.innerHTML = renderSummary(username);
    }    
}

function renderSummary(username){
    return `                
    <div class="summary-content">
    <div class="tasks">
        <div class="tasks-steps">
            <!-- bsp eines containers -->
            <div class="task-box">
                <div href="board.html" class="task-box-content">
                    <span class="task-amount" id="task-amount">5</span>
                    <span class="task-description">Tasks in Board</span>
                </div>
            </div>
            <!-- task box2 -->
            <div class="task-box">
                <div href="board.html" class="task-box-content">
                    <span class="task-amount" id="task-amount">2</span>
                    <span class="task-description">Tasks in Progress</span>
                </div>
            </div>
            <div class="task-box">
                <div href="board.html" class="task-box-content">
                    <span class="task-amount" id="task-amount">2</span>
                    <span class="task-description">Await Feedback</span>
                </div>
            </div>
        </div>
    </div>
    <!-- middle urgent date box -->
    <div class="task-target-date">
        <div class="task-urgency">
            <img src="assets/img/urgent-color.svg" alt="">
            <div class="task-level-box">
                <span class="task-level">1</span>
                <span class="task-level-name">Urgent</span>
            </div>
        </div>
        <div class="line">   
        </div>
        <div class="task-date-box">
            <span class="task-date-deadline">Oktober 16, 2022</span>
            <span class="task-date-description">Upcoming Deadline</span>
        </div>
    </div>
    <!-- bottom task box -->
    <div class="task-bottom-content">
        <div class="tasks-To-do">
            <img src="assets/img/summaryedit.svg" class="pencil" >
            <div class="tasks-To-do-amount">
                <span class="task-amount">1</span>
                <span class="task-description">To-do</span>
            </div>
        </div>
        <div class="tasks-Done-content">
            <img src="assets/img/summarydone.svg" class="pencil"  >
            <div class="tasks-Done">
                <span class="task-amount">1</span>
                <span class="task-description">To-do</span>
            </div>

        </div>
    </div>


</div>
<div class="welcome-name"> 
    <span class="good-morning">Good Morning,</span>
    <span class="welcome-login-name">${username}</span>
</div>`
}