import { trierParStatut } from "./tri.js";
import { deletes } from "./delete/delete.js";
import { modifierTache } from "./modifie.js";

let colonnesMap

export function genererElementProjet(project) {
    const elementProjet = document.createElement('div');
    elementProjet.dataset.id = project.id;
    elementProjet.dataset.end = project.end;
    elementProjet.classList.add('project');
    elementProjet.innerHTML = `
        <button class="delete">X</button>
        <button class="modif"></button>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p>date de commencement : ${project.creationDate}</p>
        <p>date de fin prevue le : ${project.end}</p>
        <select name="choix" class="selection">
            <option value="to do">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
        </select>
    `;

    elementProjet.querySelector('.selection').value = project.state;

    return elementProjet;
}

function deplacerElement(element, selectedValue, colonneCible) {

    if (document.querySelector('#displayMode').value !== 'uneColonne') {
        colonneCible.appendChild(element);
    }

    const taches = JSON.parse(window.localStorage.getItem('project'));

    const id = element.dataset.id;
    const elementIndex = taches.findIndex((e) => e.id === id);
    taches[elementIndex].state = selectedValue;

    localStorage.setItem('project', JSON.stringify(taches));
}

function gererChoix() {
    const elements = document.querySelectorAll('.selection');
    elements.forEach(selectElement => {
        selectElement.addEventListener('change', (event) => {
            const selectedValue = event.target.value.toLowerCase();
            const elementParent = event.target.closest('.project');
            let colonneCible = colonnesMap[selectedValue];

            deplacerElement(elementParent, selectedValue, colonneCible);
        });
    });

}

export function afficherProjets() {
    colonnesMap = {
        'to do': document.querySelector('.colonne__toDo'),
        doing: document.querySelector('.colonne__doing'),
        done: document.querySelector('.colonne__done'),
    }


    Object.values(colonnesMap).forEach((c) => { c.innerHTML = '' })

    let projetsTries = trierParStatut();

    Object.values(projetsTries).forEach(taches => {
        taches.forEach(projet => {
            const elementProjet = genererElementProjet(projet);
            let colonneCible = colonnesMap[projet.state];
            colonneCible.appendChild(elementProjet);

        });
    });
    gererChoix();
    document.querySelector('#afficherPopup').addEventListener('click', () => {
        document.querySelector('dialog').showModal();
    })

    deletes();
    modifierTache()
}
