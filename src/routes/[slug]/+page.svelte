<script>
    import PostDate from '$lib/components/PostDate.svelte';
    import TableOfContents from '$lib/components/TableOfContents.svelte';

    /** @type {{post: import('$lib/wordpressTypes').WPPost, tableOfContents: []}} */
    export let data;

    const date = new Date(data.post.date);
</script>

<h1>{data.post.title.rendered}</h1>

<PostDate date={date}/>

<article class="post">
    <TableOfContents toc={data.tableOfContents} />
    {@html data.post.content.rendered}
</article>

<style>
    h1 {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 600;
        color: rgba(var(--color-accent));
    }
    article {
        margin-top: 2rem;
    }

</style>