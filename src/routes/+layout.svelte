<script>
  import { onMount } from "svelte";
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";

</script>

<div class="container">
  <Header />
  <hr />
  <main>
    <slot />
  </main>
  <hr />
  <Footer />
</div>

<style>
  .container {
    width: 100%;
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }
  main {
    padding-bottom: 1.5rem;
    padding-top: 2rem;
  }
</style>
