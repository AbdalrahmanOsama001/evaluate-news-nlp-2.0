// src/client/js/handleSubmit.js

// Import displayResults to use it in handleSubmit
import { displayResults } from './displayResults';

// Function to handle form submission
const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the URL input from the form
    const url = document.getElementById('url').value;

    // Basic URL validation
    const isValidUrl = (url) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)\\.)+[a-z]{2,6}|' + // domain name
            'localhost|' + // localhost
            '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IPv4
            '\\[?[a-f0-9]*:[a-f0-9:%.~#?&=]*\\]?)' + // IPv6
            '(\\:\\d+)?(\\/[-a-z0-9+&@#/%=~_|\\?\\.:]*)*$', 'i'); // path
        return !!pattern.test(url);
    };

    if (!url || !isValidUrl(url)) {
        alert('Please enter a valid URL');
        return;
    }

    // API endpoint for your server
    const apiUrl = '/api/analyze'; // Your server endpoint for analysis

    try {
        // Make the API call to your server endpoint
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Use JSON for the request body
            },
            body: JSON.stringify({ url }), // Send the URL in the request body
        });

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();

        // Handle the response
        displayResults(data);
    } catch (error) {
        console.error('Error making API call:', error);
        alert('An error occurred while fetching the data. Please try again.');
    }
};

export { handleSubmit };
