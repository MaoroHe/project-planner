import { storage } from "./storage/storage.js";

import { dayRest } from "./jourRestant/jourRestant.js";

storage();
setInterval(dayRest, 10000);

// import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';

// localStorage.clear() clear