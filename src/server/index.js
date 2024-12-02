// src/server/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config(); 
const fetch = require('node-fetch'); // Import node-fetch to make API requests

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist')); // Serve static files from the dist directory

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

// API endpoint for analyzing the article
app.post('/api/analyze', async (req, res) => {
    const { url } = req.body; 
    const apiKey = process.env.API_KEY; 
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`;

    try {
        const response = await fetch(apiUrl, { method: 'POST' });
        const data = await response.json(); // Parse the JSON response

        // Send the modified data back to the client
        res.json({
            status: data.status,
            score_tag: data.score_tag,
            subjectivity: data.subjectivity,
            sentence_list: data.sentence_list // Send the sentence list for text snippets
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' }); // Handle errors
    }
});

// Catch-all route for 404 errors
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
