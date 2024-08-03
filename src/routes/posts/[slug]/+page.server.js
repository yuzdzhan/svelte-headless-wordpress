
/**
 * @type {import('./$types').PageLoad}
 */
export async function load({ fetch, params }) {
    try {
      const response = await fetch(`/api/posts?page=${params.slug}&perPage=5`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      /** @type {import('$lib/wordpressTypes').PaginatedResponsePosts} */
      const posts = await response.json();
      return {posts, currentPage: parseInt(params.slug)};
    } catch (error) {
      console.error("Error loading posts:", error);
      return {
        posts: [],
        error: "Failed to load posts",
      };
    }
  }
  