import {processContent} from '../../utils/utils.js';

/**
 * @type {import('../../../.svelte-kit/types/src/routes').PageLoad}
 */
export async function load({ fetch, params }) {
    try {
      const response = await fetch(`/api/post?slug=${params.slug}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      /** @type {import('$lib/wordpressTypes.js').WPPost[]} */
      const posts = await response.json();
      const post = posts[0];
      let {processedContent, toc} = processContent(post.content.rendered);
      post.content.rendered = processedContent;

      return {post, tableOfContents: toc};
    } catch (error) {
      console.error("Error loading posts:", error);
      return {
        posts: [],
        error: "Failed to load posts",
      };
    }
  }
  