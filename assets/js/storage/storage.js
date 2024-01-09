import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';
export function storage() {
    let storages = JSON.parse(window.localStorage.getItem('project')) || [];

    const btn = document.getElementById('form_valid');

    function guidGenerator() {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    btn.addEventListener('click', () => {
        const nameInput = document.getElementById('form_name');
        const projectName = nameInput.value;

        const descInput = document.getElementById('form_descrip');
        const descContent = descInput.value;

        const today = dateFns.format(new Date(), 'MM/dd/yyyy');

        const days = dateFns.addDays(new Date(), 14)
        const dateInput = document.getElementById('form_date');
        const endDate = dateInput.value || days;

        let state = 'to do';

        if (projectName.length >= 3 && projectName.length <= 256) {
            if (descContent.length !== 0) {
                if (descContent.length >= 5 && descContent.length <= 1024) {
                    const newProject = {
                        name: projectName,
                        description: descContent,
                        id: guidGenerator(),
                        creationDate: today,
                        end: endDate,
                        state: state,
                    };
        
                        storages.push(newProject);
                } else {
                    alert('La description doit soit ne rien contenir soit contenir entre 5 et 1024 caractères.')
                }
            } else {
            const newProject = {
                name: projectName,
                description: descContent,
                id: guidGenerator(),
                creationDate: today,
                end: endDate,
                state: state,
            };

                storages.push(newProject);
            }
        } else {
            alert('Le titre doit comporter entre 3 et 256 caractères.');
        }

        localStorage.setItem('project', JSON.stringify(storages));
    });
};