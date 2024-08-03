<script>
    import PostDate from '$lib/components/PostDate.svelte';

    /**
     * @type {import('$lib/wordpressTypes').WPPost}
     */
    export let post;

    $: date = new Date(post.date);
</script>

<li>
    <a class="accent" href="/{post.slug}" title={post.title.rendered}>
        <h3>{post.title.rendered}</h3>
    </a>

    <PostDate date={date}/>

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
</style>
