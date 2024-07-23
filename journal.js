
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('journalForm');
    const message = document.getElementById('message');
    const entryList = document.getElementById('entryList');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const entryDate = document.getElementById('entryDate').value;
        const entryContent = document.getElementById('entryContent').value;

        if (!entryDate || !entryContent) {
            message.textContent = 'Please fill in both fields.';
            return;
        }

        const newEntry = {
            date: entryDate,
            content: entryContent
        };

        fetch('https://my-json-server.typicode.com/imon2537/myDatabase/journalEntries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEntry)
        })
        .then(response => response.json())
        .then(data => {
            message.textContent = 'Entry saved!';
            addEntryToList(data);
            form.reset();
        })
        .catch(error => {
            message.textContent = 'An error occurred.';
        });
    });

    function addEntryToList(entry) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${entry.date}</strong><p>${entry.content}</p>`;
        entryList.appendChild(listItem);
    }

    // Load existing entries
    fetch('https://my-json-server.typicode.com/imon2537/myDatabase/journalEntries')
        .then(response => response.json())
        .then(entries => {
            entries.forEach(entry => addEntryToList(entry));
        })
        .catch(error => {
            message.textContent = 'An error occurred while loading entries.';
        });
});
