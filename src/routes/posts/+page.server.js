/**
 * @type {import('./$types').PageLoad}
 */
export async function load({fetch}) {
    try {
        const response = await fetch("/api/posts?page=1&perPage=5");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        /** @type {import('$lib/wordpressTypes').PaginatedResponsePosts} */
        const posts = await response.json();


        const pageResponse = await fetch("/api/page?id=554");
        if (!pageResponse.ok) {
            throw new Error(`HTTP error! status: ${pageResponse.status}`);
        }
        /** @type {import('$lib/wordpressTypes').WPPage} */
        const frontPageData = await pageResponse.json();

        return {posts, frontPageData}

    } catch (error) {
        console.error("Error loading posts:", error);
        return {
            posts: [],
            error: "Failed to load posts",
        };
    }
}
  