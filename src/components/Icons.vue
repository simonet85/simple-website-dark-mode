<template>
  <div class="icons">
    <div
      @click="$emit('change-theme', false)"
      class="fas fa-moon"
      id="theme-btn"
    ></div>
    <div class="fas fa-palette" id="color-btn"></div>
    <div class="fas fa-search" id="search-btn"></div>
    <div class="fas fa-bars" id="menu-btn"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: " ",
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "darkMode" ? " " : "darkMode";
      document.documentElement.setAttribute("data-theme", this.theme); // sets the data-theme attribute
      localStorage.setItem("theme", this.theme);
    },
  },
};
</script>

<style scoped>
body.active {
  --bg-color-1: #222;
  --bg-color-2: #333;
  --text-color-1: #fff;
  --text-color-2: #eee;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0.4);
}

.header .icons div {
  height: 4.5rem;
  line-height: 4.5rem;
  width: 4.5rem;
  text-align: center;
  font-size: 1.7rem;
  color: var(--text-color-1);
  background: var(--bg-color-1);
  margin-left: 0.5rem;
  cursor: pointer;
}

.header .icons div:hover {
  background: var(--main-color);
  color: #fff;
}
</style>