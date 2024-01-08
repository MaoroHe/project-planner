import {storage } from "./storage/storage.js";

export function trierParStatut() {
  const taches = storage();
  
  return taches.reduce((triee, project) => {
    triee[project.state].push(project);
    return triee;
  }, {
    "to do": [],
    "doing": [],
    "done": []
  });
}


