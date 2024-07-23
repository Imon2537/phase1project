document.addEventListener('DOMContentLoaded', () => {
    const connectForm = document.getElementById('connectForm');
    const message = document.getElementById('message');
    const platformList = document.getElementById('platformList');
    const timeList = document.getElementById('timeList');
    const moodPromptTimeInput = document.getElementById('moodPromptTime');
    let moodPromptTimes = {}; // Store mood prompt times for each platform

    connectForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const platformName = document.getElementById('platformName').value;
        const platformURL = document.getElementById('platformURL').value;
        const moodPromptTime = parseInt(moodPromptTimeInput.value, 10);

        if (!platformName || !platformURL || isNaN(moodPromptTime) || moodPromptTime <= 0) {
            message.textContent = 'Please fill in all fields correctly.';
            return;
        }

        const newPlatform = {
            name: platformName,
            url: platformURL,
            timeSpent: 0,
            moodPromptTime: moodPromptTime
        };

        fetch('https://my-json-server.typicode.com/imon2537/myDatabase/platforms', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlatform)
        })
        .then(response => response.json())
        .then(data => {
            message.textContent = 'Platform added!';
            addPlatformToList(data);
            connectForm.reset();
        })
        .catch(error => {
            message.textContent = 'An error occurred.';
            console.error('Error:', error);
        });
    });

    function addPlatformToList(platform) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${platform.url}" target="_blank">${platform.name}</a> - Time Spent: ${platform.timeSpent} mins`;
        platformList.appendChild(listItem);
        moodPromptTimes[platform.id] = platform.moodPromptTime; // Store the mood prompt time
    }

    // Load existing platforms
    fetch('https://my-json-server.typicode.com/imon2537/myDatabase/platforms')
        .then(response => response.json())
        .then(platforms => {
            platforms.forEach(platform => {
                addPlatformToList(platform);
            });
        })
        .catch(error => {
            message.textContent = 'An error occurred while loading platforms.';
            console.error('Error:', error);
        });

    // Function to simulate time tracking
    function trackTime() {
        fetch('https://my-json-server.typicode.com/imon2537/myDatabase/platforms')
            .then(response => response.json())
            .then(platforms => {
                platforms.forEach(platform => {
                    platform.timeSpent += 1; // Simulate 1 minute of time spent
                    console.log(`Platform: ${platform.name}, Time Spent: ${platform.timeSpent} minutes, Mood Prompt Time: ${platform.moodPromptTime}`);

                    // Check if it's time to prompt the user
                    if (platform.timeSpent % platform.moodPromptTime === 0) {
                        console.log(`Prompting Mood Tracker for ${platform.name}`);
                        promptMoodTracker(platform);
                    }

                    fetch(`https://my-json-server.typicode.com/imon2537/myDatabase/platforms/${platform.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(platform)
                    });
                });
            })
            .catch(error => {
                console.error('An error occurred while updating time.', error);
            });
    }

    function promptMoodTracker(platform) {
        // Using alert instead of confirm to ensure the dialog is not blocked
        alert(`You've spent ${platform.timeSpent} minutes on ${platform.name}. You will be redirected to the Mood Tracker.`);
        window.location.href = 'mood.html';
    }

    // Periodically update time spent on platforms
    setInterval(trackTime, 60000); // Every minute
});
