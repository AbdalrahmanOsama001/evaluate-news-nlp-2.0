// src/client/js/app.js

import '../styles/style.scss'; // Import the main SCSS file
import { handleSubmit } from './handleSubmit';

// Add event listener to the form
document.getElementById('article-form').addEventListener('submit', handleSubmit);
