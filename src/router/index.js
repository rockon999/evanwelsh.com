import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Not Found',
      component: () => import('@/pages/NotFound')
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
