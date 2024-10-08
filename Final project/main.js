// ----------------- Function Open Popup Add --------------------
let openPopupAdd = document.querySelector('#openPopupAdd');
let popup_add = document.querySelector('.popup_add');
let closeAdd = document.querySelector('#closeAdd');

openPopupAdd.addEventListener('click', function() {
    popup_add.style.display = 'block'
})

closeAdd.addEventListener('click', function() {
    popup_add.style.display = 'none'
})
// ----------------- Function Open Popup Add --------------------

// ----------------- Function Open Popup Update --------------------
let popup_update = document.querySelector('.popup_update');
let closeUpdate = document.querySelector('#closeUpdate')

// function openPopupUpdate() {
//     popup_update.style.display = 'block'
// }

closeUpdate.addEventListener('click', function() {
    popup_update.style.display = 'none'
})
// ----------------- Function Open Popup Update --------------------

// ----------------- Function Read Task --------------------
let list = document.querySelector('.pList')
let tasks = [
    {
        'title': 'mazen',
        'date': '1/9/2024',
        'isDone': false
    },
    {
        'title': 'ashraf',
        'date': '1/9/2024',
        'isDone': true
    },
    {
        'title': 'ismeal',
        'date': '1/9/2024',
        'isDone': false
    }
]
// في حالة حذف localStorage
function getTasksForStorage() {
    // update Value array with localStorage
    let reTasks = JSON.parse(localStorage.getItem('tasks'))
    if (reTasks == null) {
        tasks = []
    } else {
        tasks = reTasks
    }
}
getTasksForStorage()

function readTask() {
    let index = 0;
    for(task of tasks) {
        let readTask = `
            <div class='list ${task.isDone? 'done' : ''}'>
                <div class="title_list">
                    <h2>${task.title}</h2>
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>${task.date}</span>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-trash" style="background-color: brown;" onclick='deleteTask(${index})'></i>
                    ${task.isDone? `
                            <i class="fa-solid fa-xmark" style="background-color: #ce3838;" onclick='isDoneTask(${index})'></i>
                        ` : `
                            <i class="fa-solid fa-check" style="background-color: green;" onclick='isDoneTask(${index})'></i>
                        ` }
                    <i class="fa-solid fa-pen" style="background-color: blue;" onclick='openPopupUpdate(${index})' id="openPopuptUpdate"></i>
                </div>
            </div>
        `
        list.innerHTML += readTask
        index++
    }
}
readTask()
// ----------------- Function Read Task --------------------

/* _________________ Function Create Task ___________________ */
let submit = document.querySelector('.send');

submit.addEventListener('click', function() {
    list.innerHTML = ''
    let addTask = document.querySelector('.addTask').value;
    let now = new Date();
    let date = `${now.getDate()}/ ${now.getMonth() + 1}/ ${now.getFullYear()}`
    let createTask = {
        'title': addTask,
        'date': date,
        'isDone': false
    }
    tasks.push(createTask);
    storage()
    readTask()
    popup_add.style.display = 'none'
})
/* _________________ Function Create Task ___________________ */

/* _________________ Function Delete Task ___________________ */
function deleteTask(index) {
    list.innerHTML = ''
    let task = tasks[index]
    let isConfirmed = confirm('Are You Sure Delete this Task: ' + task.title)
    if(isConfirmed) {
        tasks.splice(index, 1);
        storage()
        readTask()
    } else {
        readTask()
    }
}
/* _________________ Function Delete Task ___________________ */
/* _________________ Function Update Task ___________________ */
let edit = document.querySelector('#edit');

function openPopupUpdate(index) {
    popup_update.style.display = 'block'
    let editTask = document.querySelector('.updateTask');
    let task = tasks[index]
    editTask.setAttribute('value', task.title)

    edit.addEventListener('click', function() {
        list.innerHTML = ''
        task.title = editTask.value
        storage()
        readTask()
        popup_update.style.display = 'none'
    })
}
/* _________________ Function Update Task ___________________ */

/* _________________ Function Is Done Task ___________________ */
function isDoneTask(index) {
    list.innerHTML = ''
    let task = tasks[index]
    task.isDone = !task.isDone
    storage()
    readTask()
}
/* _________________ Function Is Done Task ___________________ */
/* _________________ STORAGE FUNCTION  ___________________ */
function storage() {
    // convert array tasks to string
    let taskStr = JSON.stringify(tasks)
    localStorage.setItem('tasks', taskStr)
}