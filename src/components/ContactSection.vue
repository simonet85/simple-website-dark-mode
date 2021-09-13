<template>
  <section class="contact" id="contact" :class="mode">
    <h1 class="heading"><span>contact</span> us</h1>

    <form action="">
      <div class="inputBox">
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
      </div>
      <div class="inputBox">
        <input type="number" placeholder="number" />
        <input type="text" placeholder="subject" />
      </div>
      <textarea
        name=""
        placeholder="your message"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <input type="submit" value="send message" class="btn" />
    </form>
  </section>
</template>

<script>
export default { props: ["mode"] };
</script>

<style>
</style>