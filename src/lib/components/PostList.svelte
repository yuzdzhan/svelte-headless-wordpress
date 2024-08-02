<script>
  import PostListLitem from "./PostListLitem.svelte";

  /**
   * @type {import('$lib/wordpressTypes').WPPost[]} 
   */
    export let posts;
</script>

<ul>
    {#each posts as post}
        <PostListLitem post={post} />
    {/each}
</ul>