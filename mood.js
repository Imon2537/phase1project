// mood-track.js

document.addEventListener('DOMContentLoaded', () => {
    const impactMessage = document.getElementById('impact-message');
    const moodForm = document.getElementById('mood-form');
    const responseSection = document.getElementById('response-section');
    const moodInput = document.getElementById('mood');
    const submitMoodButton = document.getElementById('submit-mood');
    const stopUsageButton = document.getElementById('stop-usage');
    const continueUsageButton = document.getElementById('continue-usage');

    // Display negative impact message
    impactMessage.textContent = 'Social media can have negative impacts on mental health, such as increased anxiety and depression. Take a moment to assess how you are feeling.';

    // Show mood form after a delay (simulate delay after using social media)
    setTimeout(() => {
        moodForm.classList.remove('hidden');
    }, 5000); // 5 seconds delay

    // Handle mood submission
    submitMoodButton.addEventListener('click', () => {
        const mood = moodInput.value.trim();
        if (mood) {
            moodForm.classList.add('hidden');
            responseSection.classList.remove('hidden');

            // Display response message based on mood
            let responseMessage = '';
            if (mood.toLowerCase().includes('depressed') || mood.toLowerCase().includes('stressed')) {
                responseMessage = 'You seem to be feeling stressed. Consider taking a break from social media. Do you want to stop using it for now?';
            } else {
                responseMessage = 'It looks like you are feeling okay. Do you want to continue using social media or take a break?';
            }
            document.getElementById('response-message').textContent = responseMessage;
        } else {
            alert('Please enter your current mood.');
        }
    });

    // Handle user decisions
    stopUsageButton.addEventListener('click', () => {
        alert('You have chosen to stop using social media. Take a break and practice self-care.');
        // Redirect or perform additional actions here
    });

    continueUsageButton.addEventListener('click', () => {
        alert('You have chosen to continue using social media. Remember to take breaks and practice self-care.');
        // Redirect or perform additional actions here
    });
});
