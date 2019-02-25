<template>
  <header class="header-container">
    <h1 class="website-title">
      <a href="/">evan welsh</a>
    </h1>
    <h3 class="website-subtitle">Developer. Designer. Nerd.</h3>
    <div class="social-media">
      <ul>
        <li>
          <i class="social-media-icon fa fa-envelope icon-link"></i>
          <a href="mailto:contact@evanwelsh.com" class="icon-link-a">
            <i>email</i>
          </a>
        </li>
        <li>
          <i class="social-media-icon fa fa-github icon-link"></i>
          <a href="http://github.com/rockon999/" class="icon-link-a">
            <i>github</i>
          </a>
        </li>
      </ul>
    </div>
    <portfolio-nav/>
  </header>
</template>

<style lang="scss" scoped>
html {
  height: 100%;
}

body {
  min-height: 100%;
}

body {
  font-family: 'cantarell', 'sans-serif';
}


.website-title,
.website-subtitle {
  margin: 0;
  text-align: center;
}

.pagination {
  font-family: 'Merriweather', 'serif';
  text-align: center;
}

.content-header {
  font-family: 'Open Sans', 'sans-serif';
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

.website-title a:hover {
  color: #999;
  text-decoration: none;
}

.website-title a {
  color: #444;
  text-decoration: none;
}

.website-title {
  font-family: 'Open Sans', 'sans-serif';
  padding-top: 5%;
  font-weight: 700;
  font-size: 5.4rem;
  color: #444;
}

.website-subtitle {
  padding-bottom: 1%;
  font-family: 'Merriweather', 'serif';
  font-size: 1.9rem;
  color: #999;
}

.social-media {
  padding-bottom: 2.5%;
  text-align: center;
}

.social-media-icon {
  display: inline-block;
  font-size: 1.75em !important;
}

.header-container {
  background-color: #efefef;
  height: 20%;
  width: 100%;
}

.social-media ul {
  padding: 0;
  display: inline-block;
}

.social-media li {
  overflow: hidden;
  background: #fff;
  list-style: none;
  white-space: nowrap;
  margin-right: 5px;
  border-radius: 25px;
  display: inline-block;
}

.social-media li a {
  opacity: 0;
  color: #666;
  max-width: 0;
  display: inline-block;
  text-decoration: none;
  transition: max-width 1s ease-out 0.1s, opacity 1s ease-out 0.1s, color;
}

.social-media li a:hover {
  color: #c33;
}

.social-media li a i {
  float: right;
  display: block;
  padding-right: 1em;
  font: 1em/1 'rokkitt', sans-serif;
}

.social-media li .social-media-icon {
  color: #c33;
  line-height: 1;
  font-size: 25px;
  display: inline-block;
  padding-top: 0.125em;
  padding-bottom: 0.125em;
  padding-left: 0.35em;
  padding-right: 0.2em;
}

.social-media li:hover a {
  opacity: 1;
  max-width: 150px;
  transition: max-width 1s ease-out 0.1s, opacity 1s ease-out 0.1s, color 0.2s;
}
</style>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';
import PortfolioNav from '@/components/PortfolioNav';

@Component({
  components: {
    PortfolioNav
  }
})
export default class Home extends Vue {}
</script>
