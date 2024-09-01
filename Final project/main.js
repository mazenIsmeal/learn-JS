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
let openPopuptUpdate = document.querySelector('#openPopuptUpdate');
let popup_update = document.querySelector('.popup_update');
let closeUpdate = document.querySelector('#closeUpdate')

openPopuptUpdate.addEventListener('click', function() {
    popup_update.style.display = 'block'
})

closeUpdate.addEventListener('click', function() {
    popup_update.style.display = 'none'
})
// ----------------- Function Open Popup Update --------------------

// ----------------- Function Create Task --------------------
// let addTask = document.querySelector('.addTask');
// let send = document.querySelector('.send');
// let addTaskArray = [];
// let list = document.querySelector('.list')

// send.addEventListener('click', function() {
//     addTaskArray.push(addTask.value)
//     for(let i = 0; i < addTaskArray.length; i++) {
//         let createTask = document.createElement('div');
//         createTask.textContent = addTaskArray[0]
//         list.appendChild(createTask)   
//     }
// })