<script setup>
  import Header from './components/header.vue';

  /*=============== SHOW SCROLL UP ===============*/

  function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560)scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
  }

  window.addEventListener('scroll', scrollUp);
</script>

<template>
  <Header/>
  <div class="main">
    <router-view></router-view>
    <!--=============== SCROLL UP ===============-->
        
    <a href="#" class="scrollup" id="scroll-up">
      <i class="bx bx-up-arrow-alt scrollup__icon"></i>
    </a>

    <!--=============== Theme Button ===============-->

    <!-- <a href="#" class="themeChangerBtn" id="themeChanger">
      <div class="red"></div>
    </a> -->
  </div>
  <!-- <RouterView /> -->
</template>

