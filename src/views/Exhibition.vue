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
        <div class="md-layout">
          <div class="md-layout-item mx-auto md-size-55 md-small-size-100">
            <md-card>
              <carousel
                :per-page="1"
                loop
                :speed="700"
                :mouse-drag="true"
                adjustableHeight
                navigationEnabled
                :paginationEnabled="false"
                navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
                @page-change="activeSlide"
              >
                <slide v-for="(art, index) in this.images" :key="index">
                  <img :src="art.url" :alt="art.alt" />
                </slide>
              </carousel>
            </md-card>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item mx-auto md-size-66 md-small-size-100">
            <md-card>
              <div ref="text" class="artwork-text"></div>
            </md-card>
          </div>
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

<script lang="js">
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
          const dt = res.data.data
          this.images=[...this.images, new this.newImage(String(this.imgAPI[0] + dt.image_id + this.imgAPI[1]), dt.title, dt.description, dt.category_titles, (this.images.length + 1))]
        });
      });
      })
    },
  mounted() {
    setTimeout(() => {
      this.loading = !this.loading;
    }, 3000);
    const delay =setInterval(() => {
      if(this.$refs.text && this.images.length >0){
        this.activeSlide();
        clearInterval(delay)
      }
    }, 50);

  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods:{
    newImage(url, title, description, style, alt){
      this.url = url;
      this.title = title;
      if(description){
      this.description = description;
      }
      this.style = style;
      this.alt = alt;
    },
    activeSlide(dataset){
      if(dataset){
        if(this.images[dataset].description !== undefined){

        this.$refs.text.innerHTML = `<div><h2>Title: ${this.images[dataset].title}</h2>${this.images[dataset].description}</div>`
        }
        else{
          this.$refs.text.innerHTML = `<div><h2>Title: ${this.images[dataset].title}</h2><p>There is no description for this artwork.</p></div>`
        }
      }
      else{
        if(this.images[0].description !== undefined){

        this.$refs.text.innerHTML =  `<div><h2>Title: ${this.images[0].title}</h2>${this.images[0].description}</div>`
        }
        else{
          this.$refs.text.innerHTML =  `<div><h2>Title: ${this.images[0].title}</h2><p>There is no description for this artwork.</p></div>`
        }
      }
    }
  }
};
</script>
<style scoped>
.artwork-text {
  padding: 10px;
}
</style>
