document.addEventListener('DOMContentLoaded', function() {
    const anzahlTage = 5; // Anzahl der Tage kann hier angepasst werden
    const daysOfWeek = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
    const daysContainer = document.getElementById('daysContainer');

    for (let i = 0; i < anzahlTage; i++) {
        const dayColumn = document.createElement('div');
        dayColumn.className = 'day-column';

        const dayTitle = document.createElement('h5');
        dayTitle.innerText = daysOfWeek[i];
        dayColumn.appendChild(dayTitle);

        const dayOptions = document.createElement('div');
        dayOptions.className = 'day-options';

        for (let j = 1; j <= 3; j++) {
            const formCheck = document.createElement('div');
            formCheck.className = 'form-check';

            const input = document.createElement('input');
            input.className = 'form-check-input';
            input.type = 'radio';
            input.name = daysOfWeek[i].toLowerCase();
            input.id = daysOfWeek[i].toLowerCase() + j;
            input.value = 'option' + j;

            const label = document.createElement('label');
            label.className = 'form-check-label';
            label.htmlFor = daysOfWeek[i].toLowerCase() + j;
            label.innerText = 'Option ' + j;

            formCheck.appendChild(input);
            formCheck.appendChild(label);
            dayOptions.appendChild(formCheck);
        }

        dayColumn.appendChild(dayOptions);
        daysContainer.appendChild(dayColumn);
    }
});