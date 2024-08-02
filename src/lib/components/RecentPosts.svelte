<script>
  import PostList from "./PostList.svelte";

  export let posts;
</script>

<section>
  <h2>Последни статии</h2>
  <PostList {posts} />
  <div class="all-posts">
    <a href="/posts/">
      Всички статии
      <svg xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
        />
      </svg>
    </a>
  </div>
</section>

<style>
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: 0.025em;
  }
  section {
    padding-bottom: 1.5rem;
    padding-top: 3rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .all-posts {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  a:hover {
    text-decoration: none;
  }

  svg {
    display: inline-block;
    height: 1.5rem;
    width: 1.5rem;
    fill: rgb(var(--color-text-base));
  }

  a:hover svg {
    fill: rgb(var(--color-accent));
  }
</style>
