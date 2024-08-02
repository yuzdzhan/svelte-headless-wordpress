import { browser } from "$app/environment";
import { writable } from "svelte/store";

/**
 * Represents the theme options for the application.
 * @typedef {'light' | 'dark'} Theme
 */

/** @type {Theme} */
const defaultTheme = 'light';

/** @type {Theme} */
let initialTheme = defaultTheme;

if(browser) {
    initialTheme = /** @type {Theme} */  (localStorage.getItem('theme'));
}

if(!initialTheme){
    initialTheme = defaultTheme;
}

/** @type {import('svelte/store').Writable<Theme>} */
export const theme = writable(initialTheme);

/**
 * Toggle current theme
 */
export function toggleTheme() {

    /**
     * 
     * @param {Theme} currentTheme
     * @returns {Theme} 
     */
    function updateTheme(currentTheme) {

        /** @type {Theme} */
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        if(browser) {
            localStorage.setItem('theme', newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
        }

        return newTheme;
    }

    theme.update(updateTheme)
}
