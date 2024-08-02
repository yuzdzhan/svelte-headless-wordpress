<script>
  import { formatDate } from "../../utils/dateUtils";

  /** @type {Post} */
  export let post;

  const date = new Date(post.date);
</script>

<li>
  <a class="accent" href="/post/{post.slug}" title={post.title.rendered}>
    <h3>{post.title.rendered}</h3>
  </a>

  <div class="date">
    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
      ></path>
      <path
        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
      ></path>
    </svg>
    <span>
      <time datetime={formatDate(date)}>{formatDate(date)}</time>
    </span>
  </div>

  <p>{@html post.excerpt.rendered}</p>
</li>

<style>
  li {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  a.accent {
    color: rgba(var(--color-accent));
  }
  
  a.accent:hover {
    text-decoration: none;
  }

  svg {
    width: 21px;
    height: 21px;
    fill: rgba(var(--color-text-base));
  }
  .date {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }

  .date span {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-style: italic;
  }
</style>
