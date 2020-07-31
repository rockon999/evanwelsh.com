<template>
  <header class="h-100 header-container">
    <b-row class="h-100 no-gutters no-wrap">
      <b-col aria-hidden="true" lg md class="d-none d-md-block">
        <img class="h-100 myself" src="/static/images/myself/myself-1.jpeg" />
      </b-col>
      <b-col aria-hidden="true" lg class="d-lg-block d-none">
        <img class="h-100 myself" src="/static/images/myself/myself-2.jpeg" />
      </b-col>
      <b-col aria-hidden="true" lg md class="d-none d-md-block">
        <img class="h-100 myself" src="/static/images/myself/myself-4.jpeg" />
      </b-col>
      <b-col aria-hidden="true" lg class="d-lg-block d-none">
        <img class="h-100 myself" src="/static/images/myself/myself-5.jpeg" />
      </b-col>
      <b-col lg md sm>
        <img
          alt="a picture of Evan exploring the world"
          class="h-100 myself"
          src="/static/images/myself/myself-6.jpeg"
        />
      </b-col>
      <b-col aria-hidden="true" lg class="d-lg-block d-none">
        <img class="h-100 myself" src="/static/images/myself/myself-7.jpeg" />
      </b-col>
    </b-row>
  </header>
</template>

<style lang="scss" scoped>
@import '../scss/variables';

html {
  height: 100%;
}

body {
  min-height: 100%;
}

.myself {
  width: 100%;
  height: 30vh;
  object-fit: cover;
}

.no-wrap {
  flex-wrap: nowrap;
}

.pagination {
  font-family: 'Merriweather', 'serif';
  text-align: center;
}

.post {
  margin-bottom: 50px;
  margin-top: 30px;
}

.post-title {
  font-family: 'Open Sans', 'sans-serif';
  margin-bottom: 20px;
}

.post-snippet {
  font-family: 'Open Sans', 'sans-serif';
  border: 5px solid #efefef;
}

.post-snippet > * {
  margin-left: 10px;
  margin-right: 10px;
}

.post-content {
  font-family: 'Inconsolata', 'Courier New', 'sans-serif';
}

.post-snippet-title {
  color: #000;
}

.post-snippet-date {
  color: #000;
}

.header-container {
  height: 20%;
  width: 100%;
}
</style>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  components: {}
})
export default class PortfolioHeader extends Vue {}
</script>
