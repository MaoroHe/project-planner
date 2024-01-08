

function trierParStatut(taches) {
    let storages = JSON.parse(window.localStorage.getItem('project'));
    let triee = {
      "to do": [],
      "doing": [],
      "done": []
    };
  
    taches.forEach(tache => {
      triee[tache.status].push(tache);
    });
  
    return triee;
  }
  
  let tachesTrie = trierParStatut(storage);