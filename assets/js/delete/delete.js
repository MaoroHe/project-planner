export function deletes() {
    const button = document.querySelectorAll('button.delete');
    let storages = JSON.parse(window.localStorage.getItem('project')) || [];

    button.forEach(element => {
        element.addEventListener('click', (event) => {
            const parent = element.parentNode;
            const index = storages.findIndex(item => item.id === element.id);

            console.log(index)
            console.log(element)

            if (index !== 0) {
                storages.splice(index, 1)
                console.log(element)
                parent.remove()
                localStorage.setItem('project', JSON.stringify(storages));
            }
        })
    })
}