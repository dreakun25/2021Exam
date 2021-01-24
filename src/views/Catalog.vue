<template>
  <ul>
    <li v-for="exhb in exh" :key="exhb.title">
      <h4>{{ exhb.title }}</h4>
      <p>{{ exhb.artwork_ids.length }}</p>
    </li>
  </ul>
</template>

<script>
// import NavTabsCard from '@/components/cards/NavTabsCard';
import instance from "@/plugins/HTTP.js";
export default {
  // components: {
  //   NavTabsCard,
  // },
  name: "Catalog",
  data() {
    return {
      exh: []
    };
  },
  created() {
    instance
      .get("https://api.artic.edu/api/v1/exhibitions?limit=100")
      .then(
        response =>
          (this.exh = response.data.data.filter(
            exhb => exhb.artwork_ids.length > 10
          ))
      );
  }
};
</script>
