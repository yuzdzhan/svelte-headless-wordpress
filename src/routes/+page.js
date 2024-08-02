/**
 * @type {import('./$types').PageLoad}
 */
export async function load({ fetch }) {
  try {
    const response = await fetch("/api/posts?page=1&perPage=3");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    /** @type {import('$lib/wordpressTypes').PaginatedResponsePosts} */
    return await response.json();
  } catch (error) {
    console.error("Error loading posts:", error);
    return {
      posts: [],
      error: "Failed to load posts",
    };
  }
}
