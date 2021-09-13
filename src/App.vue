<template>
  <div :class="mode">
    <div>
      <header-section
        :mode="mode"
        @changetheme="toggle($event)"
        @changecolor="changetocolor($event)"
        @showpalette="showpalette"
        @showsearch="showsearch"
        @showmenu="showmenu"
      ></header-section>
      <home-section :mode="mode"></home-section>
      <services-section :mode="mode"></services-section>
      <gallery-section :mode="mode"></gallery-section>
      <pricing-section :mode="mode"></pricing-section>
      <reviews-section :mode="mode"></reviews-section>
      <contact-section :mode="mode"></contact-section>
      <footer-section :mode="mode"></footer-section>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderSection from "./components/HeaderSection";
import HomeSection from "./components/HomeSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
export default {
  data() {
    return {
      mode: "light",
      colorPalette: " ",
      flag: true,
    };
  },
  methods: {
    toggle() {
      this.mode = this.mode === "darkMode" ? " " : "darkMode";
      // sets the data-active attribute
      document.querySelector(":root").setAttribute("data-active", this.mode);
      // stores theme value on local storage
      localStorage.setItem("mode", this.mode);
    },
    changetocolor(color) {
      document.querySelector(":root").style.setProperty("--main-color", color);
      this.colorPalette = color;
      localStorage.setItem("colorpalette", this.colorPalette);
    },
    showpalette() {
      let colorPalette = document.querySelector(".colors-palette");
      if (this.flag) {
        colorPalette.style.display = "block";
        this.flag = !this.flag;
      } else {
        colorPalette.style.display = "none";
        this.flag = !this.flag;
      }
    },
    showsearch() {
      let searchForm = document.querySelector(".search-form");
      if (this.flag) {
        searchForm.style.display = "flex";
        this.flag = !this.flag;
      } else {
        searchForm.style.display = "none";
        this.flag = !this.flag;
      }
    },
    showmenu() {
      let navBar = document.querySelector(".navbar");
      if (this.flag) {
        navBar.style.display = "block";
        this.flag = !this.flag;
      } else {
        navBar.style.display = "none";
        this.flag = !this.flag;
      }
    },
  },
  mounted() {
    //gets stored theme value if any
    let localMode = localStorage.getItem("mode");
    let localPalette = localStorage.getItem("colorpalette");
    // updates the data-theme attribute
    document.documentElement.setAttribute("data-active", localMode);
    document
      .querySelector(":root")
      .style.setProperty("--main-color", localPalette);
  },
  components: {
    HeaderSection,
    HomeSection,
    ServicesSection,
    GallerySection,
    PricingSection,
    ReviewsSection,
    ContactSection,
    FooterSection,
  },
};
</script>

<style>
/* @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css'); */
@import "./assets/styles/global.css";
/* @import "./assets/styles/typography.css"; */

[data-active="darkMode"] {
  /* Variables for dark mode */
  --bg-color-1: #222;
  --bg-color-2: #333;
  --text-color-1: #fff;
  --text-color-2: #eee;
  --box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0.4);
}
</style>