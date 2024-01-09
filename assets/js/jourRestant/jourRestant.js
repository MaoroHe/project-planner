import * as dateFns from 'https://cdn.jsdelivr.net/npm/date-fns@2.24.0/esm/index.js';
export function dayRest() {
    let storages = JSON.parse(window.localStorage.getItem('project')) || [];
    
    storages.forEach(element => {
        const days = dateFns.addDays(new Date(), 14)
        const endDate = element.end || days;

        const dayBetween = dateFns.differenceInDays(
            new Date(),
            new Date(endDate),
        );

        //append child
    });
};