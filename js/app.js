let deleteBtns = document.querySelectorAll('.delete-btn');

deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (e) => {
        // prevent link redirect
        e.preventDefault();
        // get todo's wrapping li
        // const li = e.target.parentElement.parentElement.parentElement.parentElement;
        const li = e.target.closest('li');
        // delete li element
        li.parentElement.removeChild(li);
    });
});