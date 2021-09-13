<template>
  <form action="#" class="search-form">
    <input type="search" id="search-box" placeholder="search here..." />
    <label for="search-box" class="fas fa fa-search"></label>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.header .search-form {
  position: absolute;
  top: 115%;
  right: 9%;
  background: var(--bg-color-2);
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: center;
  height: 5rem;
  width: 50rem;
  padding: 1rem;
  display: none;
}

.header .search-form.active {
  display: flex;
}

.header .search-form input {
  height: 100%;
  width: 100%;
  background: none;
  text-transform: none;
  font-size: 1.6rem;
  color: var(--text-color-1);
  padding: 1rem;
}

.header .search-form label {
  color: var(--text-color-1);
  font-size: 2rem;
  padding-right: 0.8rem;
  cursor: pointer;
}

.header .search-form label:hover {
  color: var(--main-color);
}
</style>