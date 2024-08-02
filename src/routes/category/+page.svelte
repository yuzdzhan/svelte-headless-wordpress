<script>
  import Paging from "$lib/components/Paging.svelte";
  import PostList from "$lib/components/PostList.svelte";

  /** @type {import('$lib/wordpressTypes').PaginatedResponsePosts} */
  export let data;
</script>

<h1>Всички статии</h1>
<p>Всички статии които съм публикувал</p>

{#if data.items.length === 0}
  <p>No posts found.</p>
{:else}
  <PostList posts={data.items} />

  {#if data.pagination && data.pagination.totalPages > 0}
    <Paging pagesCount={data.pagination.totalPages} currentPage={1} />
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
