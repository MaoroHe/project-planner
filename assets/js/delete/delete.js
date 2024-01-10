export function deletes() {
    const button = document.querySelectorAll('button.delete');
    let storages = JSON.parse(window.localStorage.getItem('project')) || [];

    button.forEach(element => {
        storages.forEach(elem => {
            element.addEventListener('click', (event) => {
                const parent = element.parentNode;
                const index = storages.findIndex( item => item.id === elem.id);
    
                if (index !== -1) {
                    storages.splice(index, 1)

                    parent.remove()
                    
                    localStorage.setItem('project', JSON.stringify(storages));
                }
            })
        })
    })
}