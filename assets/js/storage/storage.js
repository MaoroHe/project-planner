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

        const today = new Date();

        console.log(today)

        if (projectName !== '') {
            if (descContent !== '') {
                const newProject = {
                    name: projectName,
                    description: descContent,
                    id: uniqueId(),
                    creationDate: today,
                };

                storages.push(newProject);
            };
        };

        localStorage.setItem('project', JSON.stringify(storages));
    });
};