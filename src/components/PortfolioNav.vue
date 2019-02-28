 <template>
  <b-navbar sticky="top" toggleable="md" type="dark" class="bg-primary">
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item href="#about">About</b-nav-item>
      <b-nav-item href="#projects">Projects</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class PortfolioNav extends Vue {}
</script>

<style lang="scss" scoped>
.site-navigation {
  display: flex;
  justify-content: space-around;
  margin: 0 20%;
  padding-bottom: 2.5%;
  div {
    font-family: 'Open Sans', 'sans-serif';
    font-size: 2.5rem;
  }
}

.navigation-link {
  padding-left: 10%;
  padding-right: 10%;
  text-decoration: none;
  color: #444;
  font-size: 1.5rem;

  &:hover {
    text-decoration: none;
    color: #999;
  }
}

.selected-navigation-link {
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: none;
  }
}
</style>
