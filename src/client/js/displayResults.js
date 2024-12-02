// src/client/js/displayResults.js

// Function to display the results
const displayResults = (data) => {
    // Check if the response contains the required data
    if (data.status.code === '0') {
        // Map the score_tag to a more descriptive polarity
        let polarity;
        switch (data.score_tag) {
            case 'P':
                polarity = 'Positive';
                break;
            case 'N':
                polarity = 'Negative';
                break;
            case 'NEU':
                polarity = 'Neutral';
                break;
            case 'NONE':
                polarity = 'No Sentiment';
                break;
            default:
                polarity = 'Unknown';
        }

        // Display the results in your HTML
        const resultContainer = document.getElementById('results');
        resultContainer.innerHTML = `
            <h2>Sentiment Analysis Results</h2>
            <p>Polarity: ${polarity}</p>
            <p>Subjectivity: ${data.subjectivity === 'subjective' ? 'Subjective' : 'Objective'}</p>
            <p>Text Snippet: ${data.sentence_list[0].text}</p>
        `;
    } else {
        alert('Error: ' + data.status.msg);
    }
};

export { displayResults };
