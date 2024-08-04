/**
 * @typedef {Object} WPPost
 * @property {number} id - The post ID
 * @property {string} date - The post creation date
 * @property {string} date_gmt - The post creation date in GMT
 * @property {Object} guid - The globally unique identifier for the post
 * @property {string} guid.rendered - The rendered GUID
 * @property {string} modified - The post modification date
 * @property {string} modified_gmt - The post modification date in GMT
 * @property {string} slug - The post slug
 * @property {string} status - The post status
 * @property {string} type - The post type
 * @property {string} link - The post URL
 * @property {Object} title - The post title
 * @property {string} title.rendered - The rendered post title
 * @property {Object} content - The post content
 * @property {string} content.rendered - The rendered post content
 * @property {string} content.protected - Whether the content is protected
 * @property {Object} excerpt - The post excerpt
 * @property {string} excerpt.rendered - The rendered post excerpt
 * @property {string} excerpt.protected - Whether the excerpt is protected
 * @property {number} author - The post author ID
 * @property {number} featured_media - The featured image ID
 * @property {string} comment_status - Whether comments are allowed
 * @property {string} ping_status - Whether pings are allowed
 * @property {boolean} sticky - Whether the post is sticky
 * @property {string} template - The post template
 * @property {string} format - The post format
 * @property {Object} meta - The post meta
 * @property {number[]} categories - Array of category IDs
 * @property {number[]} tags - Array of tag IDs
 * @property {string} yoast_head
 * @property {object} yoast_json
 */


/**
 * @typedef {Object} WPPage
 * @property {number} id - The page ID
 * @property {string} date - The page creation date
 * @property {string} date_gmt - The page creation date in GMT
 * @property {Object} guid - The globally unique identifier for the page
 * @property {string} guid.rendered - The rendered GUID
 * @property {string} modified - The page modification date
 * @property {string} modified_gmt - The page modification date in GMT
 * @property {string} slug - The page slug
 * @property {string} status - The page status
 * @property {string} type - The page type (should be 'page')
 * @property {string} link - The page URL
 * @property {Object} title - The page title
 * @property {string} title.rendered - The rendered page title
 * @property {Object} content - The page content
 * @property {string} content.rendered - The rendered page content
 * @property {string} content.protected - Whether the content is protected
 * @property {Object} excerpt - The page excerpt
 * @property {string} excerpt.rendered - The rendered page excerpt
 * @property {string} excerpt.protected - Whether the excerpt is protected
 * @property {number} author - The page author ID
 * @property {number} featured_media - The featured image ID
 * @property {number} parent - The parent page ID
 * @property {number} menu_order - The page order
 * @property {string} comment_status - Whether comments are allowed
 * @property {string} ping_status - Whether pings are allowed
 * @property {string} template - The page template
 * @property {Object} meta - The page meta
 * @property {string} yoast_head
 * @property {object} yoast_json
 */


/**
 * @typedef {Object} WPCategory
 * @property {number} id - The category ID
 * @property {number} count - The number of posts in this category
 * @property {string} description - The category description
 * @property {string} link - URL to the category
 * @property {string} name - The category name
 * @property {string} slug - The category slug
 * @property {string} taxonomy - The taxonomy slug
 * @property {number} parent - The parent category ID
 * @property {string} yoast_head
 * @property {object} yoast_json
 */

/**
 * @typedef {Object} WPTag
 * @property {number} id - The tag ID
 * @property {number} count - The number of posts with this tag
 * @property {string} description - The tag description
 * @property {string} link - URL to the tag
 * @property {string} name - The tag name
 * @property {string} slug - The tag slug
 * @property {string} taxonomy - The taxonomy slug
 * @property {string} yoast_head
 * @property {object} yoast_json
 */

/**
 * @typedef {Object} WPUser
 * @property {number} id - The user ID
 * @property {string} name - The user's name
 * @property {string} url - The user's website URL
 * @property {string} description - The user's description
 * @property {string} link - URL to the user's page on the site
 * @property {string} slug - The user's slug
 * @property {Object} avatar_urls - URLs to the user's avatar image
 * @property {string} yoast_head
 * @property {object} yoast_json
 */

/**
 * @typedef {Object} PaginationInfo
 * @property {number} totalItems - Total number of items
 * @property {number} totalPages - Total number of pages
 */

/**
 * @typedef {Object} PaginatedResponsePosts
 * @property {WPPost[]} items - Array of posts
 * @property {PaginationInfo} pagination - Pagination information
 */

/**
 * @typedef {Object} PaginatedResponseCategories
 * @property {WPCategory[]} items - Array of categories
 * @property {PaginationInfo} pagination - Pagination information
 */

/**
 * @typedef {Object} PaginatedResponsePostsWithCategory
 * @property {WPPost[]} items - Array of posts
 * @property {WPCategory} category - Array of category
 * @property {PaginationInfo} pagination - Pagination information
 */

/**
 * @typedef {Object} PaginatedResponseTags
 * @property {WPTag[]} items - Array of tags
 * @property {PaginationInfo} pagination - Pagination information
 */

/**
 * @typedef {Object} PaginatedResponseUsers
 * @property {WPUser[]} items - Array of users
 * @property {PaginationInfo} pagination - Pagination information
 */

export {};