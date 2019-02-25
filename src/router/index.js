import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Blog from '@/pages/Blog';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [
    {
      path: '/blog',
      name: 'Blog',
      component: () => Blog
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => Projects
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
