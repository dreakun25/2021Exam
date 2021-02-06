<template>
  <div class="wrapper">
    <div v-if="loading === false">
      <parallax class="section page-header page-filter " :style="headerStyle">
        <div class="container ">
          <div class="md-layout ">
            <div
              class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100 md-alignment-bottom-left"
            >
              <div class="element ">
                <h1 class="title">{{ this.exhb.title }}</h1>
                <h4>
                  {{ this.exhb.short_description }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </parallax>
      <div class="main main-raised">
        <div v-for="exh in exhb.artwork_ids" :key="exh" @click="getArtwork(exh)">
          <h1>{{ exh }}</h1>
        </div>
      </div>
    </div>
    <div class="text-center" v-if="loading === true">
      <div class="md-layout">
        <div class="md-layout-item">
          <md-card>
            <md-card-media-cover>
              <md-card-media md-ratio="16:9" class="rounded">
                <img v-lazy="this.gif" alt="Loading" />
              </md-card-media>
            </md-card-media-cover>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import instance from '../plugins/HTTP.js';
import axios from 'axios';
export default {
  name: 'Exhibition',
  data() {
    return {
      id: this.$route.params.id,
      imgAPI: ['https://www.artic.edu/iiif/2/', '/full/843,/0/default.jpg'],
      exhb: null,
      artworks: null,
      images: [],
      imgAPI_ids: [],
      loading: true,
      header: null,
      gif: 'https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif',
    };
  },
  created() {
    instance.get('exhibitions/' + this.id).then((res) => {
      this.exhb = res.data.data;
      this.artworks = this.exhb.artwork_ids;
      this.header = this.exhb.image_url;
      this.artworks.forEach((artwork) => {
        instance.get('artworks/' + artwork).then((res) => {
          this.imgAPI_ids.push(String(res.data.data.image_id));
        });
      });
    });
  },
  mounted() {
    this.getImages(this.imgAPI_ids);
    setTimeout(() => {
      this.loading = !this.loading;
    }, 2000);
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
    getArtwork(id) {
      instance.get('artworks/' + id).then((res) => {
        let art;
        art = res.data.data;
        instance.get('images/' + art.image_id).then((response) => {});
      });
    },
    getImages(ar) {
      ar.forEach((element) => {
        console.log(element);
      });
    },
  },
};
</script>

<style scoped>
.element {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
  border-radius: 5px;
  padding: 3px;
}
.rounded {
  border-radius: 50px;
}
</style>
