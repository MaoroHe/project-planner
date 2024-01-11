import { storage } from "./storage/storage.js";
import { afficherProjets} from "./dom.js";
import { dayRest, displayDayRest } from "./jourRestant/jourRestant.js";
import { displayMode }from "./affichage.js"


storage();
afficherProjets();
storage();
setInterval(dayRest, 1000);
setTimeout(displayDayRest, 0);
setInterval(displayDayRest, 1000);
displayMode();

// import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';