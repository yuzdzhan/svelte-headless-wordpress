<script>
  import Socials from "./Socials.svelte";

</script>
<footer>
  <div>
    Всички права запазени © {new Date().getFullYear()}
    <br />
    Блогът е разработен от <span>ИноМедия ЕООД</span>
    <br />
    <a href="https://www.inomedia.bg" target="_blank">www.inomedia.bg</a>
  </div>
  <Socials />
</footer>

<style>
  footer {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    gap: 20px;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: auto;
  }
  span {
    white-space: nowrap;
  }
</style>
