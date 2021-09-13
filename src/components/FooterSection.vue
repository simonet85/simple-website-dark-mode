<template>
  <section class="footer">
    <div class="box-container">
      <div class="box">
        <h3>quick links</h3>
        <a href="#"> <i class="fas fa-chevron-right"></i> home </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> services </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> gallery </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> pricing </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> review </a>
        <a href="#"> <i class="fas fa-chevron-right"></i> contact </a>
      </div>

      <div class="box">
        <h3>contact info</h3>
        <a href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
        <a href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
        <a href="#"> <i class="fas fa-envelope"></i> shaikhanas@gmail.com </a>
        <a href="#"> <i class="fas fa-envelope"></i> anasshaikh@gmail.com </a>
        <a href="#">
          <i class="fas fa-map-marker-alt"></i> mumbai, india - 400104
        </a>
      </div>

      <div class="box">
        <h3>follow us</h3>
        <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
        <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
        <a href="#"> <i class="fab fa-pinterest"></i> pinterest </a>
      </div>

      <div class="box">
        <h3>follow us</h3>
        <a href="#"> <i class="fab fa-windows"></i> windows </a>
        <a href="#"> <i class="fab fa-apple"></i> app store </a>
        <a href="#"> <i class="fab fa-google-play"></i> play store </a>
      </div>
    </div>

    <div class="credit">
      &copy; copyright @ 2021 by <span>mr. web designer</span>
    </div>
  </section>
</template>

<script>
export default { props:["mode"]};
</script>

<style>
.footer {
  background: var(--bg-color-2);
}

.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 1.5rem;
}

.footer .box-container .box h3 {
  font-size: 2.5rem;
  color: var(--text-color-1);
  padding: 1rem 0;
}

.footer .box-container .box a {
  display: block;
  font-size: 1.5rem;
  color: var(--text-color-2);
  padding: 1rem 0;
}

.footer .box-container .box a i {
  padding-right: 0.5rem;
  color: var(--main-color);
}

.footer .box-container .box a:hover i {
  padding-right: 1.5rem;
}

.footer .credit {
  font-size: 2rem;
  padding: 2rem;
  margin-top: 1.5rem;
  text-align: center;
  color: var(--text-color-1);
}

.footer .credit span {
  color: var(--main-color);
}
</style>