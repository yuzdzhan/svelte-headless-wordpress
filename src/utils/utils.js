/**
 *
 * @param {Date} date
 * @returns
 */
export function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

import {parse} from 'node-html-parser';

export function processContent(content) {
    const root = parse(content);
    const headings = root.querySelectorAll('h2, h3, h4, h5, h6');

    const toc = [];
    headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName.substring(1)) - 1;
        const text = heading.textContent;
        const id = heading.textContent.replaceAll(' ', '_');

        // Create a hidden anchor tag
        const anchorTag = parse(`<a id="${id}" href="#${id}" class="anchor-link" aria-hidden="true" tabindex="-1">#</a>`);
        heading.appendChild(anchorTag);

        toc.push({level, text, id});
    });

    return {
        toc,
        processedContent: root.toString()
    };
}