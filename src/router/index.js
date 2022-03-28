import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

const page = path => () => import(`@/views/pages${path}.vue`);

Vue.use(VueRouter)
Vue.use(Meta);

const routes = [
  {
    path: '/',
    component: page('/Main')
  },
  {
    path: 'ceo',
    component: page('/Ceo')
  },
  {
    path: 'our-mission',
    component: page('/OurMission')
  },
  {
    path: 'our-history',
    component: page('/OurHistory')
  },
  {
    path: 'main',
    component: page('/Main')
  },
  {
    path: 'reports',
    component: page('/Reports')
  },
  {
    path: 'news',
    component: page('/News')
  },
  {
    path: 'news-detail',
    component: page('/NewsDetail')
  },
  {
    path: 'care',
    component: page('/Care')
  },
  {
    path: 'link',
    component: page('/Link')
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
