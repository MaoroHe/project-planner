
import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';
import { afficherProjets} from "./dom.js";

function activerMode(mode){
    switch (mode) {
        case 'Normal' :
            afficherColonne();
            afficherProjets();
            break;
        case 'JoursRestant':
            afficherColonne();
            afficherProjets();
            trierParJoursRestant();
            break;
        case 'parTitre':
            afficherColonne()
            afficherProjets();
            trierParTitre()
            break;
        case 'uneColonne':
            masquerColonnes();
            regrouperDansUneColonne();
            break;
    }
}

export function displayMode() {
    document.getElementById('displayMode').addEventListener('change', (e) => {
        const mode = event.target.value;
        activerMode(mode);
        localStorage.setItem("display-mode", mode)
    })

    const mode = localStorage.getItem("display-mode") ?? 'Normal';
    activerMode(mode);
    document.getElementById('displayMode').value = mode;
}

function trierParJoursRestant() {
    const colonnes = ['colonne__toDo', 'colonne__doing', 'colonne__done'];

    colonnes.forEach(colonneClass => {
        const colonne = document.querySelector(`.${colonneClass}`);
        const projets = Array.from(colonne.querySelectorAll('.project'));

        projets.sort((a, b) => {
            const dateA = dateFns.parseISO(a.dataset.end);
            const dateB = dateFns.parseISO(b.dataset.end);
            const today = new Date();

            const joursRestantsA = dateFns.differenceInDays(dateA, today);
            const joursRestantsB = dateFns.differenceInDays(dateB, today);

            return joursRestantsA - joursRestantsB;
        });

        projets.forEach(projet => colonne.appendChild(projet));
    });
}

function trierParTitre() {
    const colonnes = ['colonne__toDo', 'colonne__doing', 'colonne__done'];

    colonnes.forEach(colonneClass => {
        const colonne = document.querySelector(`.${colonneClass}`);
        const projets = Array.from(colonne.querySelectorAll('.project'));

        projets.sort((a, b) => {
            const titreA = a.querySelector('h3').textContent.toLowerCase();
            const titreB = b.querySelector('h3').textContent.toLowerCase();

            return titreA.localeCompare(titreB);
        });

        projets.forEach(projet => colonne.appendChild(projet));
    });
}

function regrouperDansUneColonne() {
    const colonnes = ['colonne__toDo', 'colonne__doing', 'colonne__done'];
    const colonneUnique = document.querySelector('.colonne__unique');
    colonneUnique.innerHTML = '';

    const allProjects = [];

    colonnes.forEach(colonneUniqueClass => {
        const colonne = document.querySelector(`.${colonneUniqueClass}`);
        const projets = Array.from(colonne.querySelectorAll('.project'));

        projets.forEach(projet => {
            allProjects.push(projet);
        });
    });

    allProjects.sort((a, b) => {
        const dateA = dateFns.parseISO(a.dataset.end);
        const dateB = dateFns.parseISO(b.dataset.end);

        return dateFns.compareAsc(dateA, dateB);
    });
    allProjects.forEach(projet => colonneUnique.appendChild(projet));
    
}



function masquerColonnes() {
    const colonneToDo = document.querySelector('.colonne__toDo').parentElement;
    const colonneDoing = document.querySelector('.colonne__doing').parentElement;
    const colonneDone = document.querySelector('.colonne__done').parentElement;

    colonneToDo.style.display = 'none';
    colonneDoing.style.display = 'none';
    colonneDone.style.display = 'none';
}
function afficherColonne() {
    const colonneToDo = document.querySelector('.colonne__toDo').parentElement;
    const colonneDoing = document.querySelector('.colonne__doing').parentElement;
    const colonneDone = document.querySelector('.colonne__done').parentElement;

    colonneToDo.style.display = 'block';
    colonneDoing.style.display = 'block';
    colonneDone.style.display = 'block';

    const colonneUnique = document.querySelector('.colonne__unique');
    colonneUnique.innerHTML = '';
}