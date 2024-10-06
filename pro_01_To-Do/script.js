const taskBtn = document.getElementById("task-btn")
const taskInp = document.getElementById("task-input")
const listContainer = document.getElementById("list-container")

const doTask = () => {

    if (taskInp.value === '') {
        alert("add some text")
    } else {
        let li = document.createElement('li')
        li.innerHTML = taskInp.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    taskInp.value = '';
    saveData()
};
taskBtn.addEventListener('click', doTask)

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    
}
function shwoData() {
    listContainer.innerHTML = localStorage.getItem("data")
    
}
shwoData()