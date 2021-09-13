<template>
  <section class="gallery" id="gallery" :class="mode">
    <h1 class="heading">our <span>gallery</span></h1>

    <div class="box-container">
      <div class="box">
        <img src="../assets/images/g-1.jpg" alt="" />
        <div class="content">
          <h3>project 01</h3>
          <span>01/09/2021</span>
        </div>
      </div>

      <div class="box">
        <img src="../assets/images/g-2.jpg" alt="" />
        <div class="content">
          <h3>project 02</h3>
          <span>01/09/2021</span>
        </div>
      </div>

      <div class="box">
        <img src="../assets/images/g-3.jpg" alt="" />
        <div class="content">
          <h3>project 03</h3>
          <span>01/09/2021</span>
        </div>
      </div>

      <div class="box">
        <img src="../assets/images/g-4.jpg" alt="" />
        <div class="content">
          <h3>project 04</h3>
          <span>01/09/2021</span>
        </div>
      </div>

      <div class="box">
        <img src="../assets/images/g-5.jpg" alt="" />
        <div class="content">
          <h3>project 05</h3>
          <span>01/09/2021</span>
        </div>
      </div>

      <div class="box">
        <img src="../assets/images/g-6.jpg" alt="" />
        <div class="content">
          <h3>project 06</h3>
          <span>01/09/2021</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { props: ["mode"] };
</script>

<style scoped>
</style>