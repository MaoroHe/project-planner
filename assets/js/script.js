import { storage, triple } from "./storage/storage.js";
import { afficherProjets} from "./dom.js";
import { dayRest } from "./jourRestant/jourRestant.js";
import { deletes } from "./delete/delete.js";
import { modifierTache } from "./modifie.js";


storage();
afficherProjets();
storage();
setInterval(dayRest, 10000);
deletes();
triple();
modifierTache()

// import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';