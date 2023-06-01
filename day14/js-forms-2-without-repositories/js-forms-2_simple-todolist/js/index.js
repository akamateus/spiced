console.clear();
​
const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');
const headlineElement = document.getElementById('headline')
​
function addNewListEntry(formObj) {
    const newLi = document.createElement('li')
    const newHeadline = document.createElement('h2')
    const newTask = document.createElement('p')
​
    newHeadline.textContent = formObj.headline
    newTask.textContent = formObj.task
​
    newLi.append(newHeadline, newTask)
​
    todoList.append(newLi)
}
​
form.addEventListener('submit', e => {
    e.preventDefault()
​
    const formData = new FormData(form)
    const formObj = Object.fromEntries(formData)
    
    form.reset()
    headlineElement.focus()
​
    addNewListEntry(formObj)
})