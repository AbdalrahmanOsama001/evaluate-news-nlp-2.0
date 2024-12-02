# Evaluate a News Article with Natural Language Processing

This project builds a web tool that lets users analyze the sentiment of news articles or blog posts using Natural Language Processing (NLP). It uses the MeaningCloud Sentiment Analysis API to determine the subjectivity (opinion vs. fact-based) and polarity (positive, neutral, or negative) of an article's content.


## Project Motivation

This project provides hands-on experience with front-end development tools and technologies commonly used in industry, including:

- Webpack for bundling and development server.
- Sass for styling.
- Webpack loaders and plugins for asset optimization.
- UI design and implementation.
- Service workers for offline functionality.
- API integration and response handling.
- Unit testing with Jest.

## Features

- Analyzes news article sentiment (polarity and subjectivity).
- Provides a text snippet from the article.
- Basic URL validation.
- Offline functionality using service workers.
- Comprehensive unit tests with Jest.
- Development and production builds with Webpack.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbdalrahmanOsama001/evaluate-news-nlp-2.0.git
   ```

2. Navigate to the project directory:

   ```bash
   cd evaluate-news-nlp-2.0
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### API Key Setup

1. **Get a MeaningCloud API Key:**
   - Create a MeaningCloud account: [https://www.meaningcloud.com/](https://www.meaningcloud.com/)
   - Obtain your license key from your account dashboard.

2. **Set Environment Variables:**
   - Create a `.env` file in the project root directory.
   - Add your API key:

     ```
     API_KEY=your_meaningcloud_api_key
     ```

     **Important:** The `.env` file is already included in the `.gitignore` to prevent your API key from being exposed publicly on GitHub.

### Running the Application

**Development Mode:**

```bash
npm run build-dev
```

This starts the webpack-dev-server. Open your browser to `http://localhost:8080`.

**Production Build:**

```bash
npm run build-prod
```
This creates optimized files in the `dist` directory, ready for deployment.

### Running Tests
```bash
npm run test
```
Runs Jest unit tests.  A coverage report can be generated with:
```bash
npm run test:coverage
```


## Tech Stack

- **Server-side:** Node.js, Express.js, body-parser, cors, dotenv, node-fetch
- **Client-side:**  HTML, CSS, JavaScript (bundled with Webpack)
- **Build Tools:** Webpack, Babel, Sass
- **Testing:** Jest
- **Offline Support:** Service Workers (Workbox)
- **API:** MeaningCloud Sentiment Analysis API