<script>
  import Hero from "$lib/components/Hero.svelte";
  import RecentPosts from "$lib/components/RecentPosts.svelte";

  /** @type {{
   * posts: import('$lib/wordpressTypes').PaginatedResponsePosts,
   * frontPageData: import('$lib/wordpressTypes').WPPage,
   * tableOfContents: []
   * }} */
  export let data;
</script>

<svelte:head>
  {@html data.frontPageData.yoast_head}
</svelte:head>

<Hero />
<hr />

{#if data.posts.items.length === 0}
  <p>No posts found.</p>
{:else}
  <RecentPosts posts={data.posts.items} />
{/if}
