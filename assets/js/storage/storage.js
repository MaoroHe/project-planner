import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';
export function storage() {
    let storages = JSON.parse(window.localStorage.getItem('project')) || [];

    const btn = document.getElementById('form_valid');

    function uniqueId() {
        return Date.now().toString(16) + Math.floor(Math.random() * 1000).toString(16)
    }

    btn.addEventListener('click', () => {
        const nameInput = document.getElementById('form_name');
        const projectName = nameInput.value;

        const descInput = document.getElementById('form_descrip');
        const descContent = descInput.value;

        const dateInput = document.getElementById('form_date');
        const endDate = dateInput.value;

        const today = dateFns.format(new Date(), 'MM/dd/yyyy');

        let state = 'to do';

        if (projectName.length <= 5) {
            const newProject = {
                name: projectName,
                description: descContent,
                id: uniqueId(),
                creationDate: today,
                end: endDate,
                state: state,
            };

            storages.push(newProject);
        };

        localStorage.setItem('project', JSON.stringify(storages));
    });
};