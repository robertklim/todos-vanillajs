// delete or mark todos as done/to be done
const todos = document.querySelector('.collection');

todos.addEventListener('click', (e) => {
    if (e.target.parentElement.className === 'delete-btn') {
        // prevent link redirect
        e.preventDefault();
        // get todo's wrapping li
        const li = e.target.closest('li');
        // delete li element
        li.parentElement.removeChild(li);
    } else if (e.target.type === 'checkbox') {
        // get todo's wrapping li
        const li = e.target.closest('li');

        // add or remove 'done' class
        if (e.target.checked) {
            li.classList.add('done');
        } else {
            li.classList.remove('done');
        }

    }
});

// add new todos
const addForm = document.getElementById('add-form');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get input field value
    const value = addForm.querySelector('input[type="text"]').value;

    // create todo's elements
    const li = document.createElement('li');
    const div = document.createElement('div');
    const todoText = document.createElement('span');
    const secondaryContent = document.createElement('span');
    const doneCheckbox = document.createElement('label');
    const doneInput = document.createElement('input');
    const doneSpan = document.createElement('span');
    const space = document.createTextNode(' ');
    const deleteBtn = document.createElement('a');
    const deleteIcon = document.createElement('i');

    // add classes and set attributes and values
    doneInput.setAttribute('type', 'checkbox');
    deleteBtn.setAttribute('href', '#!');
    doneInput.classList.add('filled-in');
    deleteBtn.classList.add('delete-btn');
    deleteIcon.classList.add('material-icons');
    deleteIcon.textContent = 'delete';
    li.classList.add('collection-item');
    todoText.classList.add('todo-text');
    todoText.textContent = value;
    secondaryContent.classList.add('secondary-content');

    // connect all the elements
    deleteBtn.appendChild(deleteIcon);
    doneCheckbox.appendChild(doneInput);
    doneCheckbox.appendChild(doneSpan);
    secondaryContent.appendChild(doneCheckbox);
    secondaryContent.appendChild(space);
    secondaryContent.appendChild(deleteBtn);
    div.appendChild(todoText);
    div.appendChild(secondaryContent);
    li.appendChild(div);
    todos.appendChild(li);

    // clear input field
    addForm.querySelector('input[type="text"]').value = '';

});

// filter todos
const searchBar = document.forms['search-form'].querySelector('input');

searchBar.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const todosAll = todos.getElementsByClassName('collection-item');
    Array.from(todosAll).forEach((todo) => {
        const todoText = todo.querySelector('.todo-text').textContent;

        if (todoText.toLowerCase().indexOf(searchTerm) != -1) {
            todo.classList.remove('hide');
        } else {
            todo.classList.add('hide');
        }
    });
});
