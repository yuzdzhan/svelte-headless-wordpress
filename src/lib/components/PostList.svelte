<script>
  import PostListLitem from "./PostListLitem.svelte";

    /** @type Post[] */
    export let posts;
</script>

<ul>
    {#each posts as post}
        <PostListLitem post={post} />
    {/each}
</ul>