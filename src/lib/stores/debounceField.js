import {writable} from 'svelte/store';

/**
 * Creates a debounced version of a function.
 * @template {Function} T
 * @param {T} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {T} A debounced version of the input function.
 */
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Creates a debounced Svelte store.
 * @template T
 * @param {T} initialValue - The initial value of the store.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {import('svelte/store').Writable<T> & { set: (value: T) => void }} A writable store with a debounced set method.
 */
export function createDebouncedStore(initialValue, delay) {
    const store = writable(initialValue);
    const set = debounce(store.set, delay);
    return {
        ...store,
        set
    };
}