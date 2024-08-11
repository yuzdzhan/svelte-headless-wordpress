/**
 * @type {import('./$types').PageLoad}
 */
export async function load({fetch, url}) {
    try {
        const search = url.searchParams.get('search') ?? '';

        if(search === '') {
            return {posts: {items: []}};
        }

        const response = await fetch("/api/posts?page=1&perPage=5&search=" + search);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        /** @type {import('$lib/wordpressTypes').PaginatedResponsePosts} */
        const posts = await response.json();

        return {posts, search}

    } catch (error) {
        console.error("Error loading posts:", error);
        return {
            posts: [],
            error: "Failed to load posts",
        };
    }
}
  