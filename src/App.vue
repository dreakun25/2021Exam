<template>
  <div>
    <MainNavbar :colorOnScroll="400" />
    <router-view />
  </div>
</template>

<script>
import MainNavbar from "./layout/MainNavbar.vue";

export default {
  name: "App",
  components: {
    MainNavbar
  }
};
</script>
