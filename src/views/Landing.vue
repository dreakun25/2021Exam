<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Art Institute of Chicago</h1>
            <h4>
              Located in downtown Chicago, the Art Institute is one of the world’s great art
              museums, housing a collection that spans centuries and the globe.
            </h4>
            <br />
            <md-button
              href="https://www.artic.edu/visit-us-virtually"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-eye"></i> Vitrtual visit</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">Our history</h2>
              <h5 class="description">
                Founded in 1879, the Art Institute of Chicago is one of the world’s major museums,
                housing an extraordinary collection of objects from across places, cultures, and
                time. We are also a place of active learning for all—dedicated to investigation,
                innovation, education, and dialogue—continually aspiring to greater public service
                and civic engagement.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <svg-icon
                      type="mdi"
                      :path="icons[1]"
                      :size="60"
                      style="color: blue;"
                    ></svg-icon>
                  </div>
                  <h4 class="info-title">Identity</h4>
                  <p>
                    Guided by our mission—and informed by our values and commitment to equity and
                    justice—the Art Institute of Chicago inspires an expansive, inclusive
                    understanding of human creativity.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <svg-icon type="mdi" :path="icons[0]" :size="60" style="color: red;"></svg-icon>
                  </div>
                  <h4 class="info-title">Curently Closed</h4>
                  <p>
                    Due to mesures against COVID-19 the museum is currently closed.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <svg-icon
                      type="mdi"
                      :path="icons[2]"
                      :size="60"
                      style="color: green;"
                    ></svg-icon>
                  </div>
                  <h4 class="info-title">Financial Reporting</h4>
                  <p>
                    Thanks to the generosity of our members, donors, volunteers, and friends, every
                    year we are able to grow our global collection, expand our audience engagement,
                    strengthen our exhibition program, and innovate our public programs for all
                    ages. Our annual reports offer a snapshot of each year from July 1 of one year
                    through June 30 of the following, coinciding with the museum’s fiscal calendar.
                    Please see our most recent reports below or our
                    <a
                      href="https://www.artic.edu/about-us/financial-reporting/archive-of-financial-reports"
                      target="_blank"
                      >archive for all reports</a
                    >
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="mid-inset" style="width: 90%;" />
      <div class="section text-center">
        <div class="container">
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-35 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      James Rondeau
                      <br />
                      <small class="card-description text-muted">President and Director</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        As the president and director of the Art Institute of Chicago, I feel deeply
                        honored and privileged to lead this museum and to contribute to the history
                        of this remarkable institution—a place I have made my professional home for
                        more than 20 years. The museum today remains true to its founding mission of
                        1879—to inspire inquiry and the free exchange of ideas through the
                        experience of art across time and cultures. These are principles we champion
                        every day in our galleries as we celebrate the diverse makers and
                        geographies and engage with generations of visitors from near and far.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-contacts">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
            <h2 class="text-center title">Newsletter</h2>
            <h4 class="text-center description">
              Sign up for our e-newsletter to receive updates.
            </h4>
            <form class="contact-form">
              <div class="md-layout">
                <div class="md-layout-item">
                  <md-field>
                    <label>Your Email</label>
                    <md-input v-model="email" type="email"></md-input>
                  </md-field>
                </div>
              </div>
              <div class="md-layout">
                <div class="md-layout-item md-size-33 mx-auto text-center">
                  <md-button class="md-success">Subscribe</md-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiCalendarAlert, mdiHumanQueue, mdiCashMultiple } from '@mdi/js';

export default {
  bodyClass: 'landing-page',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/exterior.jpg'),
    },
    teamImg1: {
      type: String,
      default: require('@/assets/img/Rondeau.jpg'),
    },
  },
  components: {
    SvgIcon,
  },
  data() {
    return {
      email: null,
      icons: [mdiCalendarAlert, mdiHumanQueue, mdiCashMultiple],
    };
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

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
