/**
 * @typedef {import('./wordpressTypes').WPPost} WPPost
 * @typedef {import('./wordpressTypes').WPPage} WPPage
 * @typedef {import('./wordpressTypes').WPCategory} WPCategory
 * @typedef {import('./wordpressTypes').WPTag} WPTag
 * @typedef {import('./wordpressTypes').WPUser} WPUser
 * @typedef {import('./wordpressTypes').PaginationInfo} PaginationInfo
 * @typedef {import('./wordpressTypes').PaginatedResponsePosts} PaginatedResponsePosts
 * @typedef {import('./wordpressTypes').PaginatedResponseCategories} PaginatedResponseCategories
 * @typedef {import('./wordpressTypes').PaginatedResponsePostsWithCategory} PaginatedResponsePostsWithCategory
 * @typedef {import('./wordpressTypes').PaginatedResponseTags} PaginatedResponseTags
 * @typedef {import('./wordpressTypes').PaginatedResponseUsers} PaginatedResponseUsers
 */

/**
 * WordPress API wrapper
 */
class WordPressAPI {
  /**
   * Create a WordPressAPI instance
   * @param {string} siteUrl - The WordPress site URL
   */
  constructor(siteUrl) {
    this.baseUrl = siteUrl;
  }

  /**
   * Make a paginated API request
   * @param {string} endpoint - API endpoint
   * @param {Object} [params={}] - Query parameters
   * @returns {Promise<{items: any[], pagination: PaginationInfo}>}
   */
  async #getPaginated(endpoint, params = {}) {
    const url = new URL(`${this.baseUrl}/${endpoint}`);
    Object.entries(params).forEach(([key, value]) =>
      url.searchParams.append(key, value.toString())
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const items = await response.json();
    return {
      items,
      pagination: {
        totalItems: Number(response.headers.get("X-WP-Total")),
        totalPages: Number(response.headers.get("X-WP-TotalPages")),
      },
    };
  }

  /**
   * Get a single page by ID
   * @param {number} id - Page ID
   * @returns {Promise<WPPage>}
   */
  async getPage(id) {
    const response = await fetch(`${this.baseUrl}/pages/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  /**
   * Get a single page by Slug
   * @param {string} slug - Page Slug
   * @returns {Promise<WPPage>}
   */
  async getPageBySlug(slug) {
    const response = await fetch(`${this.baseUrl}/pages?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const pages = await response.json();
    if (pages.length === 0) {
      throw new Error(`No page found with slug: ${slug}`);
    }
    return pages[0];
  }

  /**
   * Get posts
   * @param {Object} [options]
   * @param {number} [options.page=1] - Page number
   * @param {number} [options.perPage=10] - Items per page
   * @returns {Promise<PaginatedResponsePosts>}
   */
  async getPosts({ page = 1, perPage = 10 } = {}) {
    return this.#getPaginated("posts", { page, per_page: perPage });
  }

  /**
   * Get a single post by ID
   * @param {number} id - Post ID
   * @returns {Promise<WPPost>}
   */
  async getPost(id) {
    const response = await fetch(`${this.baseUrl}/posts/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  /**
   * Get a single post by Slug
   * @param {string} slug - Post Slug
   * @returns {Promise<WPPost>}
   */
  async getPostBySlug(slug) {
    const response = await fetch(`${this.baseUrl}/posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
  /**
   * Get categories
   * @returns {Promise<PaginatedResponseCategories>}
   */
  async getCategories() {
    return this.#getPaginated("categories");
  }

  /**
   * Get a single category by ID
   * @param {number} id - Category ID
   * @returns {Promise<WPCategory>}
   */
  async getCategory(id) {
    const response = await fetch(`${this.baseUrl}/categories/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  /**
   * Get tags
   * @returns {Promise<PaginatedResponseTags>}
   */
  async getTags() {
    return this.#getPaginated("tags");
  }

  /**
   * Get a single tag by ID
   * @param {number} id - Tag ID
   * @returns {Promise<WPTag>}
   */
  async getTag(id) {
    const response = await fetch(`${this.baseUrl}/tags/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  /**
   * Get authors (users)
   * @param {Object} [options]
   * @param {number} [options.page=1] - Page number
   * @param {number} [options.perPage=10] - Items per page
   * @returns {Promise<PaginatedResponseUsers>}
   */
  async getAuthors({ page = 1, perPage = 10 } = {}) {
    return this.#getPaginated("users", { page, per_page: perPage });
  }

  /**
   * Get a single author (user) by ID
   * @param {number} id - User ID
   * @returns {Promise<WPUser>}
   */
  async getAuthor(id) {
    const response = await fetch(`${this.baseUrl}/users/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  /**
   * Search posts
   * @param {Object} options
   * @param {string} options.searchTerm - Search term
   * @param {number} [options.page=1] - Page number
   * @param {number} [options.perPage=10] - Items per page
   * @returns {Promise<PaginatedResponsePosts>}
   */
  async searchPosts({ searchTerm, page = 1, perPage = 10 }) {
    return this.#getPaginated("posts", {
      search: searchTerm,
      page,
      per_page: perPage,
    });
  }

  /**
   * Get posts by category slug
   * @param {Object} options
   * @param {string} options.slug - Category slug
   * @param {number} [options.page=1] - Page number
   * @param {number} [options.perPage=10] - Items per page
   * @returns {Promise<PaginatedResponsePostsWithCategory>}
   */
  async getPostsByCategorySlug({ slug, page = 1, perPage = 10 }) {
    // First, get the category ID from the slug
    const categoriesResponse = await this.#getPaginated("categories", { slug });
    if (categoriesResponse.items.length === 0) {
      throw new Error(`No category found with slug: ${slug}`);
    }

    const category = categoriesResponse.items[0];
    const categoryId = category.id;

    // Then, get the posts for this category
    const posts = await this.#getPaginated("posts", {
      categories: categoryId,
      page,
      per_page: perPage,
    });

    return {
        category: category,
        items: posts.items,
        pagination: posts.pagination
    }
  }

  /**
   * Get posts by tag slug
   * @param {Object} options
   * @param {string} options.slug - Tag slug
   * @param {number} [options.page=1] - Page number
   * @param {number} [options.perPage=10] - Items per page
   * @returns {Promise<PaginatedResponsePosts>}
   */
  async getPostsByTagSlug({ slug, page = 1, perPage = 10 }) {
    // First, get the tag ID from the slug
    const tagsResponse = await this.#getPaginated("tags", { slug });
    if (tagsResponse.items.length === 0) {
      throw new Error(`No tag found with slug: ${slug}`);
    }
    const tagId = tagsResponse.items[0].id;

    // Then, get the posts for this tag
    return this.#getPaginated("posts", {
      tags: tagId,
      page,
      per_page: perPage,
    });
  }
}

export default WordPressAPI;
