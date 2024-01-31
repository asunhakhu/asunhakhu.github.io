// Initial response counts
let responseCounts = {
    'a': 150,
    'b': 315,
    'c': 244,
    'd': 201,
    'e': 87
};

function submitAnswer(option) {
    // Map options to corresponding social media platforms
    const optionsMap = {
        'a': 'Facebook',
        'b': 'Instagram',
        'c': 'Twitter',
        'd': 'LinkedIn',
        'e': 'Snapchat'
    };

    // Display the selected option and its probability
    const resultContainer = document.getElementById('result');
    const selectedPlatform = optionsMap[option];
    const probability = 100 * parseFloat(document.getElementById(option).innerText);
    resultContainer.innerHTML = `You selected ${selectedPlatform} with a probability of ${probability.toFixed(2)}%.`;

    // Update response count
    responseCounts[option]++;
    updateResponseCount(option);
}

function updateResponseCount(option) {
    // Display the updated response count for the selected option
    const countElement = document.getElementById(`count_${option}`);
    countElement.innerText = responseCounts[option];
}

// Show the second survey widget when scrolling down
window.addEventListener('scroll', function() {
    const secondWidget = document.querySelectorAll('.hidden')[0];
    const surveyContainer = document.getElementById('survey-container');
    const offset = surveyContainer.getBoundingClientRect().top;

    if (offset < window.innerHeight / 2) {
        secondWidget.classList.remove('hidden');
    }
});
