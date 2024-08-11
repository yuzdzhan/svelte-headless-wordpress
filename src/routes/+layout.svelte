<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import {onNavigate} from '$app/navigation';

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

</script>

<div class="container">
    <Header/>
    <hr/>
    <main>
        <slot/>
    </main>
    <hr/>
    <Footer/>
</div>

<style>
    .container {
        width: 100%;
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        min-height: 100svh;
    }

    main {
        padding-bottom: 1.5rem;
        padding-top: 2rem;
    }
</style>
