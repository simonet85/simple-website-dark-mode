<template>
  <section class="pricing" id="pricing" :class="mode">
    <h1 class="heading">our <span>pricing</span></h1>

    <div class="box-contanier">
      <div class="box">
        <span class="fas fa-paper-plane"></span>
        <h3>basic plan</h3>
        <div class="price"><i>$</i>10<i>/monthly</i></div>
        <ul>
          <li><i class="fas fa-check"></i> 5 projects</li>
          <li><i class="fas fa-check"></i> maintainance</li>
          <li><i class="fas fa-check"></i> 5GB storage</li>
          <li><i class="fas fa-check"></i> 1 domain</li>
          <li><i class="fas fa-check"></i> 24/7 services</li>
        </ul>
        <a href="#" class="btn">choose plan</a>
      </div>

      <div class="box">
        <span class="fas fa-plane"></span>
        <h3>standard plan</h3>
        <div class="price"><i>$</i>30<i>/monthly</i></div>
        <ul>
          <li><i class="fas fa-check"></i> 15 projects</li>
          <li><i class="fas fa-check"></i> maintainance</li>
          <li><i class="fas fa-check"></i> 15GB storage</li>
          <li><i class="fas fa-check"></i> 15 domain</li>
          <li><i class="fas fa-check"></i> 24/7 services</li>
        </ul>
        <a href="#" class="btn">choose plan</a>
      </div>

      <div class="box">
        <span class="fas fa-rocket"></span>
        <h3>premium plan</h3>
        <div class="price"><i>$</i>50<i>/monthly</i></div>
        <ul>
          <li><i class="fas fa-check"></i> 25 projects</li>
          <li><i class="fas fa-check"></i> maintainance</li>
          <li><i class="fas fa-check"></i> 25GB storage</li>
          <li><i class="fas fa-check"></i> 25 domain</li>
          <li><i class="fas fa-check"></i> 24/7 services</li>
        </ul>
        <a href="#" class="btn">choose plan</a>
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