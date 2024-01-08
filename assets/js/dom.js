import { trierParStatut } from "./tri.js";

export function genererElementProjet(project) {
    const elementProjet = document.createElement('div');
    elementProjet.classList.add('project');
    elementProjet.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <p>"date de commencement : ${project.creationDate}"<p>
    <p>"date de fin prevue le : ${project.end}"<p>
    <p>${project.state}</p>
        
    `;
    return elementProjet;
}

export function afficherProjets() {
    const colonneAfaire = document.querySelector('.colonne__toDo');
    const colonneEnCours = document.querySelector('.colonne__doing');
    const colonneTermine = document.querySelector('.colonne__done');

    colonneAfaire.innerHTML = '';
    colonneEnCours.innerHTML = '';
    colonneTermine.innerHTML = '';

    let projetsTries = trierParStatut();

    Object.values(projetsTries).forEach(taches => {
        taches.forEach(projet => {
            const elementProjet = genererElementProjet(projet);

            switch (projet.state) {
                case 'to do':
                    colonneAfaire.appendChild(elementProjet);
                    break;
                case 'doing':
                    colonneEnCours.appendChild(elementProjet);
                    break;
                case 'done':
                    colonneTermine.appendChild(elementProjet);
                    break;
                default:
                    break;
            }
        });
    });
}
