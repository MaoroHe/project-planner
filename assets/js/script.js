import { storage } from "./storage/storage.js";
import { afficherProjets} from "./dom.js";
import { dayRest, displayDayRest } from "./jourRestant/jourRestant.js";
import { deletes } from "./delete/delete.js";
import { modifierTache } from "./modifie.js";


storage();
afficherProjets();
storage();
setInterval(dayRest, 1000);
setInterval(displayDayRest, 1000);
deletes();
triple();
modifierTache()

// import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';