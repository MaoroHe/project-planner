import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';
export function dayRest() {
    let storages = JSON.parse(window.localStorage.getItem('project')) || [];
    
    storages.forEach(element => {
        const start = dateFns.parseISO(element.creationDate)
        let days = dateFns.addDays(start, 14)
        const endDate = element.end || days;

        let dayBetween = dateFns.differenceInDays(
            new Date(),
            new Date(endDate),
        );
        
        dayBetween += -1;
        dayBetween *= -1;

        element.dayRest = dayBetween;

        localStorage.setItem('project', JSON.stringify(storages));
    });
};

function deleteElement(elements) {
    elements.forEach(element => {
        element.remove();
    });
}

export function displayDayRest() {
    const divs = document.querySelectorAll('div.project');
    const pDays = document.querySelectorAll('p.day');
    
    deleteElement(pDays);

    const storages = JSON.parse(window.localStorage.getItem('project')) || [];

    divs.forEach(box => {
        storages.forEach(element => {
            if (element.id == box.dataset.id) {
                const nouveauChild = document.createElement('p');
                const txt = 'Il reste ' + element.dayRest + ' jour(s) avant la fin du projet!';
                
                nouveauChild.className = 'day';
                nouveauChild.textContent = txt;

                box.appendChild(nouveauChild);
            }
        });
    });
}