<script>
  /** @type number */
  export let currentPage;

  /** @type number */
  export let pagesCount;
</script>

{#if pagesCount > 1}
  <nav class="nav" aria-label="Pagination">
    {#if currentPage === 1}
      <span aria-label="Предишна страница" aria-disabled="true">
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"
          />
        </svg>
        Предишна страница
      </span>
    {:else}
      <a href={`/posts/${currentPage - 1}/`} aria-label="Предишна страница">
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"
          />
        </svg>
        Предишна страница
      </a>
    {/if}

    {currentPage} / {pagesCount}

    {#if currentPage === pagesCount}
      <span aria-label="Следваща страница" aria-disabled="true">
        Следваща страница
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
          />
        </svg>
      </span>
    {:else}
      <a href={`/posts/${currentPage + 1}/`} aria-label="Следваща страница">
        Следваща страница
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"
          />
        </svg>
      </a>
    {/if}
  </nav>

  <style>
    .nav {
      margin-bottom: 2rem;
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      gap: 1.4rem;
    }

    svg {
      display: inline-block;
      height: 1.5rem;
      width: 1.5rem;
      fill: rgb(var(--color-text-base));
    }

    span {
      pointer-events: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      opacity: 0.5;
    }

    a:hover svg {
      fill: rgb(var(--color-accent));
    }
  </style>
{/if}
