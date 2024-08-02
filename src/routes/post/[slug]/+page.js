/**
 * @type {import('./$types').PageLoad}
 */
export async function load({ fetch, params }) {
    try {
      const response = await fetch(`/api/post?slug=${params.slug}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      /** @type {import('$lib/wordpressTypes').WPPost[]} */
      const posts = await response.json();
      return posts[0];
    } catch (error) {
      console.error("Error loading posts:", error);
      return {
        posts: [],
        error: "Failed to load posts",
      };
    }
  }
  