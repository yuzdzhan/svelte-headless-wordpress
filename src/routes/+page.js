
/**
 * @type {import('./$types').PageLoad}
 */
export async function load({fetch}) {
    try {
        const response = await fetch('/api/posts?limit=3&_fields=id,title,excerpt,date,slug');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        /** @type {WPPostsResponse} */
        const wpRes = await response.json();

        return { posts: wpRes.posts };
    }catch (error) {
        console.error('Error loading posts:', error);
        return { 
            posts: [],
            error: 'Failed to load posts'
        };
    }
}