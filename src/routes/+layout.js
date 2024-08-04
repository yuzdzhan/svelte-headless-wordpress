import { theme } from "$lib/stores/theme";
import {browser} from '$app/environment';

/** @type {import('$lib/stores/theme').Theme} */
let initialTheme = 'light';

if(browser) {
    initialTheme =  /** @type {import('$lib/stores/theme').Theme} */ (
        localStorage.getItem("theme")
    );
    document.documentElement.setAttribute("data-theme", initialTheme);
}


theme.set(initialTheme);