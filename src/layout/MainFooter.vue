<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <div class="container">
        <p>
          This application has been created for course exam purposes for the
          <a href="http://www1.aegean.gr/aegean2/index.html" target="_blank"
            >University of the Aegean</a
          >
          implementing the Vue Material Kit by
          <a href="https://www.creative-tim.com">
            Creative Tim
          </a>
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="https://www.creative-tim.com/license" target="_blank">
              Licenses
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'MainFooter',
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
