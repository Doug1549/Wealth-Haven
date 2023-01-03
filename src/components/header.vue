<script >

export default {
  name: 'Header',
  
  mounted() {
    let toggleId = document.querySelector('#nav-toggle'),
    navId = document.querySelector('#nav-menu');

    toggleId.onclick = () => {
        navId.classList.toggle('show-menu');
    }

    /*=============== REMOVE MENU MOBILE ===============*/

    // let navLink = document.querySelectorAll('.nav__link');

    // navLink.onclick = () => {
    //     navId.classList.remove('show-menu');
    // }
  }
}

    


</script>

<template>
    <header class="header" id="header">
        <nav class="nav container-fluid">
            <router-link :to="{ name: 'HOME' }" class="nav__logo">
                <img src="../assets/img/logo.png" alt="">
            </router-link>

            <div class="nav__menu" id="nav-menu" @onclick="">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link :to="{ name: 'HOME' }" class="nav__link">Home</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link :to="{ name: 'CREATIVE' }" class="nav__link">Creatives</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link :to="{ name: 'CONTACT' }" class="nav__link">Contact us</router-link>
                    </li>
                    <li class="nav__item">
                        <a href=" https://partner.wealthhavenfintech.com/login" class="nav__link" target="_blank">Login</a>
                    </li>

                    <!-- <i class="bx bx-toggle-left change-theme" id="theme-button"></i> -->
                </ul>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class="bx bx-grid-alt"></i>
            </div>
        </nav>
    </header>
</template>

