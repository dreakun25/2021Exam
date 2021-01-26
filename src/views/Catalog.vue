<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Exhibitions Demo</h1>
            <h4>
              This is is a small demo of the exhibitions that the museum provides for viewing.
            </h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="text-center" v-for="i in Math.ceil(exh.length / 2)" :key="i">
      <div class="md-layout">
        <div class="md-layout-item" v-for="exhb in exh.slice((i - 1) * 2, i * 2)" :key="exhb.title">
          <md-card>
            <md-card-media-cover md-text-scrim>
              <md-card-media md-ratio="16:9">
                <img :src="exhb.image_url" alt="Exhibition sample image" />
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-tittle">{{ exhb.title }}</span>
                  <span class="md-subhead" v-if="exhb.short_description">{{
                    exhb.short_description
                  }}</span>
                </md-card-header>

                <md-card-actions>
                  <md-button>Action</md-button>
                  <md-button>Action</md-button>
                </md-card-actions>
              </md-card-area>
            </md-card-media-cover>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import instance from '@/plugins/HTTP.js';
export default {
  props: {
    header: {
      type: String,
      default: require('@/assets/img/interior.jpg'),
    },
  },
  name: 'Catalog',
  data() {
    return {
      exh: [],
    };
  },
  created() {
    instance
      .get('https://api.artic.edu/api/v1/exhibitions?limit=100')
      .then(
        (response) =>
          (this.exh = response.data.data.filter(
            (exhb) => exhb.artwork_ids.length > 10 && exhb.image_url,
          )),
      );
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="css" scoped></style>
