import { storage } from "./storage/storage.js";

storage();

// import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';

// localStorage.clear() clear

let hgf = JSON.parse(window.localStorage.getItem('project')) || [];

hgf.forEach(element => {
    const stat = element.state;
    console.log(stat)
});

console.log(hgf);