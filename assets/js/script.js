

import { storage } from "./storage/storage.js";
import { genererElementProjet} from "./dom.js";
import { afficherProjets} from "./dom.js";
import {trierParStatut} from "./tri.js";



storage();
afficherProjets();
genererElementProjet();
trierParStatut()

// import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';