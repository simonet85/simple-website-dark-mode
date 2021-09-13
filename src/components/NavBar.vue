<template>
  <nav class="navbar">
    <router-link to="#home">Home</router-link>
    <router-link to="#services">Services</router-link>
    <router-link to="#gallery">Gallery</router-link>
    <router-link to="#pricing">Pricing</router-link>
    <router-link to="#review">Review</router-link>
    <router-link to="#contact">Contact</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style >
.navbar {
  position: absolute;
  top: 115%;
  right: 9%;
  background: var(--bg-color-2);
  box-shadow: var(--box-shadow);
  width: 25rem;
  padding: 1rem;
  display: none;
}

.navbar.active {
  display: block;
}

.navbar a {
  font-size: 2rem;
  padding: 1rem;
  color: var(--text-color-1);
  display: block;
}

.navbar a:hover {
  color: var(--main-color);
  padding-left: 2rem;
}
</style>