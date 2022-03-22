import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

const page = path => () => import(`@/views/pages${path}.vue`);

Vue.use(VueRouter)
Vue.use(Meta);

const routes = [
  {
    path: '/',
    component: page('/home')
  },
  {
    path: 'about',
    component: page('/about')
  },
  {
    path: 'main',
    component: page('/main')
  },
  {
    path: 'ceo',
    component: page('/ceo')
  }
  ,
  {
    path: 'reports',
    component: page('/reports')
  }
]

export default () => new VueRouter({
  mode: 'history',
  scrollBehavior: () => null,
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/en/' },
    {
      path: '/:lang(en|ko|ja|zh)',
      component: page('/language-root'),
      children: routes
    }
  ]
})
