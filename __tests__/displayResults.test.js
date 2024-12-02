// src/client/js/__tests__/displayResults.test.js

import { displayResults } from '../src/client/js/displayResults';

describe('displayResults', () => {
    let resultContainer;

    beforeEach(() => {
        // Set up a DOM element to display results
        document.body.innerHTML = '<div id="results"></div>';
        resultContainer = document.getElementById('results');
    });

    test('displays positive sentiment correctly', () => {
        const data = {
            status: { code: '0' },
            score_tag: 'P',
            subjectivity: 'subjective',
            sentence_list: [{ text: 'This is a great article!' }]
        };

        displayResults(data);

        expect(resultContainer.innerHTML).toContain('Polarity: Positive');
        expect(resultContainer.innerHTML).toContain('Subjectivity: Subjective');
        expect(resultContainer.innerHTML).toContain('Text Snippet: This is a great article!');
    });

    test('displays error message when status code is not 0', () => {
        const data = {
            status: { code: '1', msg: 'Error occurred' }
        };

        // Mock alert
        global.alert = jest.fn();

        displayResults(data);

        expect(global.alert).toHaveBeenCalledWith('Error: Error occurred');
    });
});
