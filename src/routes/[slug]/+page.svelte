<script>
    import PostDate from '$lib/components/PostDate.svelte';
    import TableOfContents from '$lib/components/TableOfContents.svelte';
    import {afterUpdate, onDestroy, onMount} from 'svelte';
    import {browser} from '$app/environment';
    import {afterNavigate} from '$app/navigation';

    onMount(() => {
        if (browser) {
            if (window.EnlighterJS) {
                return;
            }

            const script = document.createElement('script');
            script.src = '/js/enlighter/enlighterjs.min.js';
            script.id = 'enlighterjs'
            script.onload = () => {
                // Initialize Enlighter.js
                window.EnlighterJS.init('pre', 'code', {
                    indent: 2
                });
            };
            document.body.appendChild(script);
        }
    });

    afterUpdate(() => {
        if (browser) {
            document.querySelectorAll('.enlighter-default').forEach(e => e.remove());
            if (window.EnlighterJS) {
                window.EnlighterJS.init('pre', 'code', {
                    indent: 2
                });
            }
        }
    });

    /** @type {{
     * post: import('$lib/wordpressTypes').WPPost,
     * tableOfContents: []
     * }} */
    export let data;
    const date = new Date(data.post.date);
</script>

<svelte:head>
    {@html data.post.yoast_head}
</svelte:head>

<h1>{data.post.title.rendered}</h1>

<PostDate date={date}/>

<article class="post">
    <TableOfContents toc={data.tableOfContents}/>
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