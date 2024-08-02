
/**
 * @type {import('./$types').PageLoad}
 */
export async function load({fetch, params}) {
    try {
        const response = await fetch(`/api/posts?limit=5&page=${params.slug}&_fields=id,title,excerpt,date,slug`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        /** @type {WPPostsResponse} */
        const data = await response.json();

        return {posts:data.posts, paging: data.paging, currentPage: params.slug};
    }catch (error) {
        console.error('Error loading posts:', error);
        return { 
            posts: [],
            error: 'Failed to load posts'
        };
    }
}