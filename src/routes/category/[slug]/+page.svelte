<script>
  import Paging from "$lib/components/Paging.svelte";
  import PostList from "$lib/components/PostList.svelte";

  /** @type {{posts: import('$lib/wordpressTypes').PaginatedResponsePostsWithCategory, currentPage: number}} */
  export let data;
</script>

<svelte:head>
  {@html data.posts.category.yoast_head}
</svelte:head>


<h1>{data.posts.category.name}</h1>
<p>{data.posts.category.description}</p>

{#if data.posts.items.length === 0}
  <p>No posts found.</p>
{:else}
  <PostList posts={data.posts.items} />

  {#if data.posts.pagination && data.posts.pagination.totalPages > 0}
    <Paging
      pagesCount={data.posts.pagination.totalPages}
      currentPage={data.currentPage}
    />
  {/if}
{/if}

<style>
  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
  }
  p {
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    font-style: italic;
  }
</style>
