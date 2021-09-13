<template>
  <div class="colors-palette">
    <h3>Choose a color</h3>
    <div class="colors">
      <div class="color" style="background: #2980b9"></div>
      <div class="color" style="background: #27ae60"></div>
      <div class="color" style="background: #e74c3c"></div>
      <div class="color" style="background: #8e44ad"></div>
      <div class="color" style="background: #b33771"></div>
      <div class="color" style="background: #0fb9b1"></div>
      <div class="color" style="background: #ff9f1a"></div>
      <div class="color" style="background: #e84393"></div>
      <div class="color" style="background: #17c0eb"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
.header .colors-palette {
  position: absolute;
  top: 115%;
  right: 9%;
  background: var(--bg-color-2);
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  text-align: center;
  width: 20rem;
  display: none;
}

.header .colors-palette.active {
  display: block;
}

.header .colors-palette h3 {
  padding: 0.7rem;
  font-size: 2rem;
  color: var(--text-color-1);
}

.header .colors-palette .colors {
  display: flex;
  flex-wrap: wrap;
  padding: 0.7rem;
  justify-content: center;
  gap: 1rem;
}

.header .colors-palette .colors .color {
  border-radius: 0.5rem;
  cursor: pointer;
  height: 4.5rem;
  width: 4.5rem;
}
</style>