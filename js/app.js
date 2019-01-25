const todos = document.querySelector('.collection');
const addForm = document.getElementById('add-form');

todos.addEventListener('click', (e) => {
    if (e.target.parentElement.className === 'delete-btn') {
        // prevent link redirect
        e.preventDefault();
        // get todo's wrapping li
        const li = e.target.closest('li');
        // delete li element
        li.parentElement.removeChild(li);
    } else if (e.target.parentElement.className === 'done-btn') {
        // prevent link redirect
        e.preventDefault();
        // get todo's wrapping li
        const li = e.target.closest('li');
        // delete li element
        li.className += " done";
    }
});

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    // create todo's elements
    const li = document.createElement('li');
    const div = document.createElement('div');
    const todoText = document.createElement('span');
    const secondaryContent = document.createElement('span');
    const doneBtn = document.createElement('a');
    const doneIcon = document.createElement('i');
    const space = document.createTextNode(' ');
    const deleteBtn = document.createElement('a');
    const deleteIcon = document.createElement('i');

    doneBtn.setAttribute('href','#!');
    deleteBtn.setAttribute('href', '#!');

    doneBtn.classList.add('done-btn');
    deleteBtn.classList.add('delete-btn');

    doneIcon.classList.add('material-icons');
    doneIcon.textContent = 'done';

    deleteIcon.classList.add('material-icons');
    deleteIcon.textContent = 'delete';

    li.classList.add('collection-item');

    todoText.classList.add('todo-text');
    todoText.textContent = value;

    secondaryContent.classList.add('secondary-content');

    doneBtn.appendChild(doneIcon);
    deleteBtn.appendChild(deleteIcon);

    secondaryContent.appendChild(doneBtn);
    secondaryContent.appendChild(space);
    secondaryContent.appendChild(deleteBtn);

    div.appendChild(todoText);
    div.appendChild(secondaryContent);

    li.appendChild(div);

    todos.appendChild(li);

    addForm.querySelector('input[type="text"]').value = '';

});