const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('ul')
const tasksList = document.querySelector('#delbtn')

taskList.addEventListener('click', deleteTask)
tasksList.addEventListener('click', deleteAllTasks)
form.addEventListener("submit", addTask)
document.addEventListener("DOMContentLoaded", getTasks)

function addTask(e){
    console.log(taskInput.value)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = "collection-item"
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    li.appendChild(a)
    const ul = document.querySelector('ul', )
    ul.appendChild(li)
    addTaskLS(taskInput.value)
    taskInput.value = ''
    e.preventDefault()
}
function deleteTask(e){
    if(e.target.textContent === "X"){
        if(confirm( "are you sure you want to remove this task?")){
            e.target.parentElement.remove()
            deleteTaskLS(e.target.parentElement.textContent.slice(0,-1))
        }
    }
}
function deleteAllTasks(e) {
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}
function addTaskLS(task){
    let tasks
    if (localStorage.getItem("tasks") === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))

}
function deleteTaskLS(task){
    let tasks
    if (localStorage.getItem("tasks") === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem(tasks))
    }
    tasks.forEach((taskLS, taskIndex) => {
        if(taskLS === task){
            task.splice((taskIndex, 1))
        }
    })
    localStorage.setItem("Tasks", JSON.stringify(tasks))
}
function getTasks(){
    let tasks
    if (localStorage.getItem("tasks") === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(task))
        li.className = "collection-item"
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken-2 secondary-content'
        a.setAttribute('href', '#')
        li.appendChild(a)
        const ul = document.querySelector('ul', )
        ul.appendChild(li)
    })
}