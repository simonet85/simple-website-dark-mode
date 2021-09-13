<template>
  <section class="services" id="services" :class="mode">
    <h1 class="heading">Our <span>Services</span></h1>

    <div class="box-container">
      <div class="box">
        <span>01</span>
        <i class="fas fa-code"></i>
        <h3>Web Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          porro.
        </p>
      </div>
      <div class="box">
        <span>02</span>
        <i class="fas fa-mobile"></i>
        <h3>Responsive Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          porro.
        </p>
      </div>
      <div class="box">
        <span>03</span>
        <i class="fas fa-palette"></i>
        <h3>Custom Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          porro.
        </p>
      </div>
      <div class="box">
        <span>04</span>
        <i class="fas fa-bullhorn"></i>
        <h3>SEO Marketing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          porro.
        </p>
      </div>
      <div class="box">
        <span>05</span>
        <i class="fas fa-envelope"></i>
        <h3>E-mail Marketing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          porro.
        </p>
      </div>
      <div class="box">
        <span>06</span>
        <i class="fas fa-headset"></i>
        <h3>24/7 Services</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          porro.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
</style>