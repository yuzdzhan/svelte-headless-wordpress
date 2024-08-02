<script>
  import Logo from "./Logo.svelte";
  import MainNav from "./MainNav.svelte";
</script>

<header class="header">
  <Logo />
  <MainNav />
</header>

<style>
  .header {
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
</style>
