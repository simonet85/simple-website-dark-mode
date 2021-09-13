<template>
  <!-- header section -->
  <header class="header" :class="mode">
    <a href="#" class="logo">LOGO</a>
    <!-- icons -->
    <div class="icons">
      <div
        @click="onClick"
        v-if="this.mode === 'darkMode'"
        class="fas fa-sun"
        id="theme-btn"
      ></div>
      <div @click="onClick" v-else class="fas fa-moon" id="theme-btn"></div>
      <div @click="showColor" class="fas fa-palette" id="color-btn"></div>
      <div @click="showSearch" class="fas fa-search" id="search-btn"></div>
      <div @click="showMenu" class="fas fa-bars" id="menu-btn"></div>
    </div>
    <!-- navbar section -->
    <nav class="navbar">
      <router-link to="#home">Home</router-link>
      <router-link to="#services">Services</router-link>
      <router-link to="#gallery">Gallery</router-link>
      <router-link to="#pricing">Pricing</router-link>
      <router-link to="#review">Review</router-link>
      <router-link to="#contact">Contact</router-link>
    </nav>
    <!-- search form section  -->
    <form action="#" class="search-form">
      <input type="search" id="search-box" placeholder="search here..." />
      <label for="search-box" class="fas fa fa-search"></label>
    </form>
    <!-- colors palette -->
    <div class="colors-palette">
      <h3>Choose a color</h3>
      <div class="colors">
        <div
          @click="onChangeColor('#2980b9')"
          class="color"
          style="background: #2980b9"
        ></div>
        <div
          @click="onChangeColor('#27ae60')"
          class="color"
          style="background: #27ae60"
        ></div>
        <div
          @click="onChangeColor('#e74c3c')"
          class="color"
          style="background: #e74c3c"
        ></div>
        <div
          @click="onChangeColor('#8e44ad')"
          class="color"
          style="background: #8e44ad"
        ></div>
        <div
          @click="onChangeColor('#b33771')"
          class="color"
          style="background: #b33771"
        ></div>
        <div
          @click="onChangeColor(' #0fb9b1')"
          class="color"
          style="background: #0fb9b1"
        ></div>
        <div
          @click="onChangeColor(' #ff9f1a')"
          class="color"
          style="background: #ff9f1a"
        ></div>
        <div
          @click="onChangeColor(' #e84393')"
          class="color"
          style="background: #e84393"
        ></div>
        <div
          @click="onChangeColor('#17c0eb')"
          class="color"
          style="background: #17c0eb"
        ></div>
      </div>
    </div>
  </header>
  <!-- header section ends -->
</template>

<script>
// import ColorsPalette from "./ColorsPalette";
// import Icons from "./Icons";
// import NavBar from "./NavBar";
// import SearchForm from "./SearchForm";
export default {
  props: ["mode"],
  components: {
    // ColorsPalette,
    // Icons,
    // NavBar,
    // SearchForm,
  },
  methods: {
    onClick() {
      this.$emit("changetheme");
    },
    onChangeColor(color) {
      this.$emit("changecolor", color);
    },
    showColor() {
      this.$emit("showpalette");
    },
    showSearch() {
      this.$emit("showsearch");
    },
    showMenu() {
      this.$emit("showmenu");
    },
  },
};
</script>

<style scoped>
</style>