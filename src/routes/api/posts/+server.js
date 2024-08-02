import { json } from "@sveltejs/kit";
import { API_URL } from '$env/static/private';

/**
 * Handles GET requests to fetch WordPress posts.
 * @param {Object} options
 * @param {Function} options.fetch - SvelteKit's fetch function
 * @param {URL} options.url - The request URL
 * @returns {Promise<Response>} A promise that resolves to a Response object containing the posts data.
 */
export async function GET({ fetch, url }) {
  const limit = url.searchParams.get("limit") || 5;
  const page = url.searchParams.get("page") || 1;
  const fields = url.searchParams.get("_fields") || null;
  const orderBy = url.searchParams.get("orderby") || 'date';
  const order = url.searchParams.get("order") || 'desc';

  let link = `${API_URL}/posts?per_page=${limit}&page=${page}&orderby=${orderBy}&order=${order}`;
  if (fields) {
    link = link + "&_fields=" + fields;
  }

  try {
    const response = await fetch(link);

    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }

    /** @type {Post[]} */
    const posts = await response.json();

    const totalPosts = parseInt(response.headers.get('x-wp-total'));
    const totalPages = parseInt(response.headers.get('x-wp-totalpages'));

    // Process the posts to extract relevant information
    const processedPosts = posts.map((post) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      slug: post.slug,
      featuredImage: post?.featuredImage
    }));

    return json({posts: processedPosts, paging: {total: totalPosts, totalPages: totalPages}});
  } catch (error) {
    console.error("Error fetching posts:", error);
    return json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
