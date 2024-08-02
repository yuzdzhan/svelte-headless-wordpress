
/**
 * @type {import('./$types').PageLoad}
 */
export async function load({ fetch, params }) {
    try {
      const response = await fetch(`/api/category?slug=${params.slug}&page=1&perPage=5`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      /** @type {import('$lib/wordpressTypes').PaginatedResponsePostsWithCategory} */
      const posts = await response.json();
      return {posts, currentPage: 1};
    } catch (error) {
      console.error("Error loading posts:", error);
      return {
        posts: [],
        error: "Failed to load posts",
      };
    }
  }
  