 <template>
  <b-navbar type="dark">
    <b-nav-item to="/">Home</b-nav-item>
    <b-nav-item to="/blog/">Blog</b-nav-item>
    <b-nav-item to="/projects">Projects</b-nav-item>
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
