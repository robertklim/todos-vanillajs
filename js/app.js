const todos = document.querySelector('.collection');

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