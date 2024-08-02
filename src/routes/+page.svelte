<script>
  import Hero from "$lib/components/Hero.svelte";
  import RecentPosts from "$lib/components/RecentPosts.svelte";

 /** @type {import('./$types').PageData} */
 export let data;

</script>
<Hero />
<hr />

{#if data.error}
    <p>Error: {data.error}</p>
{:else if data.posts.length === 0}
    <p>No posts found.</p>
{:else}
  <RecentPosts posts={data.posts} />
{/if}
