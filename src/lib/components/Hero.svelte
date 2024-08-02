<script>
  import Socials from "./Socials.svelte";
</script>

<div class="hero">
  <h1>Добре дошли в Ozzy Dev Corner</h1>
  <p>
    Здравейте, аз съм Юзджан Мехмедов, старши програмист в
    <a href="https://www.superhosting.bg" target="_blank">СуперХостинг.БГ</a>
    с над 10 години опит в уеб разработката. Това е моят личен блог, където ще намерите
    полезни съвети, подробни ръководства и интересни статии, които ще ви помогнат
    да подобрите уменията си. Присъединете се към мен в това вълнуващо пътешествие
    и нека се учим и развиваме заедно!
  </p>
  <div class="socials">
    Социални мрежи:
    <Socials />
  </div>
</div>

<style>
  .hero {

    padding-bottom: 1.5rem;
    padding-top: 2rem;
  }

  .hero h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    line-height: 1;
    font-weight: 600;
  }

  .socials {
    align-items: center;
    display: flex;
    gap: 10px;
    margin-top: 2rem;
  }
</style>
