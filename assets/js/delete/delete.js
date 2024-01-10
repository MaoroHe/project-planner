export function deletes() {
    const buttons = document.querySelectorAll('button.delete');
    let storages = JSON.parse(window.localStorage.getItem('project')) || [];

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const parent = button.parentNode;
            const idADelete = parent.dataset.id;

            const index = storages.findIndex(item => item.id === idADelete);

            if (index !== -1) {
                storages.splice(index, 1);
                parent.remove();
                localStorage.setItem('project', JSON.stringify(storages));
            }
        });
    });
}
