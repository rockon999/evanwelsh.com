<template>
  <header class="header-container">
    <div class="website-title">
      <a href="/">
        <b>Evan</b>
        <span class="last-name">Welsh</span>
      </a>
    </div>
    <h3 class="website-subtitle">one line of code at a time</h3>
    <div class="social-media">
      <ul>
        <bubble
          url="mailto:contact@evanwelsh.com"
          :is-brand="false"
          iconId="envelope"
          description="email"
        />
        <bubble url="http://github.com/rockon999/" iconId="github" description="github"/>
        <bubble url="https://www.linkedin.com/in/evan-welsh-291577141/" iconId="linkedin" description="linkedin"/>
      </ul>
    </div>
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

.website-title,
.website-subtitle {
  margin: 0;
  font-size: 3rem;
  text-align: center;
  font-family: 'Raleway';

  .last-name {
    color: $primary;
  }
}

.social-media {
  padding-top: 1rem;
  text-align: center;

  ul {
    padding: 0;
    display: inline-block;

    li {
      overflow: hidden;
      list-style: none;
      white-space: nowrap;

      display: inline-block;
    }
  }
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

.website-title {
  padding-top: 5%;
  font-weight: 700;
  font-size: 4rem;
  color: #444;
  a {
    color: #444;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
}

.website-subtitle {
  padding-bottom: 1%;
  font-family: 'Merriweather', 'serif';
  font-size: 1.2rem;
  color: #444;
}

.header-container {
  height: 20%;
  width: 100%;
}
</style>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';
import PortfolioNav from '@/components/PortfolioNav';
import SocialMediaBubble from '@/components/SocialMediaBubble';

@Component({
  components: {
    PortfolioNav,
    bubble: SocialMediaBubble
  }
})
export default class PortfolioHeader extends Vue {}
</script>
