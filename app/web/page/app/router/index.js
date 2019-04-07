import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list/list';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: ListView
      },
      {
        path: '/comic',
        component:  () => import('./comic/comic')
      },
    
      {
        path: '/list',
        component: ListView
      },
      {
        path: '/detail/:id',
        component: () => import('./detail/detail')
      }
    ]
  });
}

