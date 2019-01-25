let deleteBtns = document.querySelectorAll('.delete-btn');
let doneBtns = document.querySelectorAll('.done-btn');

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

doneBtns.forEach((doneBtn) => {
    doneBtn.addEventListener('click', (e) => {
        // prevent link redirect
        e.preventDefault();
        // get todo's wrapping li
        // const li = e.target.parentElement.parentElement.parentElement.parentElement;
        const li = e.target.closest('li');
        // mark todo as done (add done class)
        li.className += " done";
    });
});