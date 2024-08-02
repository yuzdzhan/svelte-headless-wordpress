/**
 * Represents a WordPress Posts API Response.
 * @typedef {Object} WPPostsResponse
 * @property {[Post]} posts
 * @property {Paging} paging
 */

/**
 * Represents a Paging.
 * @typedef {Object} Paging
 * @property {number} totalPosts
 * @property {number} totalPages
 */

/**
 * Represents a WordPress post.
 * @typedef {Object} Post
 * @property {number} id - The unique identifier for the post.
 * @property {object} title - The title of the post.
 * @property {string} title.rendered - The title of the post.
 * @property {object} excerpt - A short extract from the post content.
 * @property {string} excerpt.rendered - A short extract from the post content.
 * @property {string} date - The publication date of the post.
 * @property {string} slug - The URL-friendly version of the post title.
 * @property {string|null} featuredImage - The URL of the post's featured image, if any.
 * @exports
 */
