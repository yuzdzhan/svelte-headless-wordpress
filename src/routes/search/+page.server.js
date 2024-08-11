/**
 * @type {import('./$types').PageLoad}
 */
export async function load({fetch}) {
    try {


    } catch (error) {
        console.error("Error loading posts:", error);
        return {
            posts: [],
            error: "Failed to load posts",
        };
    }
}
  