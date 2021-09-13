<template>
  <!-- pricing section ends -->

  <section class="review" id="review" :class="mode">
    <h1 class="heading">client's <span>review</span></h1>

    <div class="box-container">
      <div class="box">
        <div class="user">
          <img src="../assets/images/pic-1.png" alt="" />
          <div class="info">
            <h3>john deo</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>(4.5)</span>
            </div>
          </div>
          <i class="fas fa-quote-right"></i>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ut
          veniam modi vitae ad explicabo,
        </p>
      </div>

      <div class="box">
        <div class="user">
          <img src="../assets/images/pic-2.png" alt="" />
          <div class="info">
            <h3>john deo</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>(4.5)</span>
            </div>
          </div>
          <i class="fas fa-quote-right"></i>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ut
          veniam modi vitae ad explicabo,
        </p>
      </div>

      <div class="box">
        <div class="user">
          <img src="../assets/images/pic-3.png" alt="" />
          <div class="info">
            <h3>john deo</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>(4.5)</span>
            </div>
          </div>
          <i class="fas fa-quote-right"></i>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ut
          veniam modi vitae ad explicabo,
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

<style>
</style>