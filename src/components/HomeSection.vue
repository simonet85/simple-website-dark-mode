<template>
  <!-- home section starts -->
  <section class="home" id="home" :class="mode">
    <div class="content">
      <h3>Your content goes here</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam aut,
        possimus vero maxime sit nobis dicta modi nam esse culpa!
      </p>
      <a href="#services" class="btn">dicover</a>
    </div>
  </section>
  <!-- home section ends -->
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
.home {
  background: url("../images/g-1.jpg");
}
</style>