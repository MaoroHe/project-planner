

export function modifierTache() {
    const buttons = document.querySelectorAll('button.modif');

    buttons.forEach(element => {
        element.addEventListener('click', (event) => {
            const elementParent = event.target.closest('.project');
            const id = elementParent.dataset.id;
            const taches = JSON.parse(window.localStorage.getItem('project'));
            const elementIndex = taches.findIndex((e) => e.id === id);
            const tache = taches[elementIndex]


            document.querySelector('#form_name').value = tache.name;
            document.querySelector('#form_descrip').value = tache.description;
            document.querySelector('#form_date').value = tache.end;
            document.querySelector('#form_modif').dataset.id = id;
            document.querySelector('#form_modif').disabled = false;
            document.querySelector('#form_valid').disabled = true;

            document.querySelector('dialog').showModal();

        })

    })

    document.querySelector('#form_modif').addEventListener('click', (event) =>{
        const id = event.target.dataset.id;
            const taches = JSON.parse(window.localStorage.getItem('project'));
            const elementIndex = taches.findIndex((e) => e.id === id);
            const tache = taches[elementIndex];

            tache.name =  document.querySelector('#form_name').value;
            tache.description =  document.querySelector('#form_descrip').value;
            tache.end =  document.querySelector('#form_date').value;

            localStorage.setItem('project', JSON.stringify(taches));

    })
}
