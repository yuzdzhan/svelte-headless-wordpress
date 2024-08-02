<script>
  import Hero from "$lib/components/Hero.svelte";
  import RecentPosts from "$lib/components/RecentPosts.svelte";

  /** @type {import('$lib/wordpressTypes').PaginatedResponsePosts} */
  export let data;
</script>

<Hero />
<hr />

{#if data.items.length === 0}
  <p>No posts found.</p>
{:else}
  <RecentPosts posts={data.items} />
{/if}
