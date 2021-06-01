//$(".button-collapse").sideNav();

document.getElementById('addTaskForm').addEventListener('submit', saveTask);
document.getElementById('resetButton').addEventListener('click', resetTable);
document.getElementById('resetButton').addEventListener('onkeypress', resetTable);
printTasks();
function initializeTable(e) {
    if(localStorage.getItem('taskList') === null) {
        let taskList = [["07:00 - 08:00", " ", " ", " ", " ", " "], ["08:00 - 09:00", " ", " ", " ", " ", " "], ["09:00 - 10:00", " ", " ", " ", " ", " "], ["10:00 - 11:00", " ", " ", " ", " ", " "], ["11:00 - 12:00", " ", " ", " ", " ", " "], ["12:00 - 13:00", " ", " ", " ", " ", " "], ["13:00 - 14:00", " ", " ", " ", " ", " "]];
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }
}

function resetTable(e) {
    let taskList = [["07:00 - 08:00", " ", " ", " ", " ", " "], ["08:00 - 09:00", " ", " ", " ", " ", " "], ["09:00 - 10:00", " ", " ", " ", " ", " "], ["10:00 - 11:00", " ", " ", " ", " ", " "], ["11:00 - 12:00", " ", " ", " ", " ", " "], ["12:00 - 13:00", " ", " ", " ", " ", " "], ["13:00 - 14:00", " ", " ", " ", " ", " "]];
    localStorage.setItem('taskList', JSON.stringify(taskList));
    printTasks();
}

function saveTask(e) {
    console.log("called");
    initializeTable();
    let taskTitle = document.getElementById('taskTitle').value;
    let taskDay  = document.getElementById('taskDay').value;
    let taskHour  = document.getElementById('taskHour').value;
    const task = {
        title: taskTitle,
        day: taskDay,
        hour: taskHour
    }
    console.log(task);
    let taskList = JSON.parse(localStorage.getItem('taskList'));
    taskList[task.hour][task.day] = task.title;
    localStorage.setItem('taskList', JSON.stringify(taskList));
    printTasks();
    e.preventDefault();
}

function printTasks() {
    let taskList = JSON.parse(localStorage.getItem('taskList'));
    let taskDiv = document.getElementById('schedule');
    let tmpdiv = "";
    tmpdiv = `<br><br><table class="striped center">
    <thead>
        <tr class="white-text">
            <td>Horario</td>
            <td>Lunes</td>
            <td>Martes</td>
            <td>Miércoles</td>
            <td>Jueves</td>
            <td>Viernes</td>
        </tr>
    </thead>

    <tbody>`;

    let aux = true;

    for (let i = 0; i < 7; i++) {
        tmpdiv += `<tr class=${aux ? " " : "white-text"}>`;
        aux = !aux;
        for (let j = 0; j < 6; j++) {
            const task = taskList[i][j];
            tmpdiv += `<td>${task}</td>`;
        }
        tmpdiv +='</tr>';
    }
    tmpdiv +='</tbody></table>';
    console.log(tmpdiv);
    taskDiv.innerHTML = tmpdiv;
}