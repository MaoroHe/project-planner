export function trierParStatut() {
    const taches = JSON.parse(window.localStorage.getItem('project')) || [];

    return taches.reduce((triee, project) => {
        triee[project.state].push(project);
        return triee;
    }, {
        "to do": [],
        "doing": [],
        "done": []
    });
}


