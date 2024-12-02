// src/client/js/__tests__/handleSubmit.test.js

import { handleSubmit } from '../src/client/js/handleSubmit';

describe('handleSubmit', () => {
    let form;

    beforeEach(() => {
        // Set up the DOM
        document.body.innerHTML = `
            <form id="article-form">
                <input type="text" id="url" value="http://example.com" />
                <button type="submit">Submit</button>
            </form>
        `;
        form = document.getElementById('article-form');
    });

    test('valid URL submission triggers API call', async () => {
        // Mock fetch
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ status: { code: '0' }, score_tag: 'P', subjectivity: 'subjective', sentence_list: [{ text: 'Great article!' }] })
            })
        );

        const handleSubmitEvent = handleSubmit.bind(form);
        await handleSubmitEvent({ preventDefault: () => {} });

        expect(fetch).toHaveBeenCalledWith('/api/analyze', expect.any(Object));
    });

    test('shows alert for invalid URL', async () => {
        document.getElementById('url').value = ''; // Set invalid URL

        // Mock alert
        global.alert = jest.fn();

        const handleSubmitEvent = handleSubmit.bind(form);
        await handleSubmitEvent({ preventDefault: () => {} });

        expect(global.alert).toHaveBeenCalledWith('Please enter a valid URL');
    });
});
