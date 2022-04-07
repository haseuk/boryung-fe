import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

const page = path => () => import(`@/views/pages${path}.vue`);

Vue.use(VueRouter)
Vue.use(Meta);

const routes = [
  {
    path: '/',
    component: page('/Home')
  },
  {
    path: 'ceo',
    redirect: 'ceo/kim'
  },
  {
    path: 'ceo/:ceo(chang|kim)',
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
    redirect: 'reports/cont1'
  },
  {
    path: 'reports/:reports(cont1|cont2|cont3)',
    component: page('/Reports')
  },
  {
    path: 'news',
    component: page('/News')
  },
  {
    path: 'news/detail',
    component: page('/NewsDetail')
  },
  {
    path: 'care',
    redirect: 'care/cont1'
  },
  {
    path: 'care/:care(cont1|cont2)',
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
    { path: '/', redirect: '/ko/' },
    {
      path: '/:lang(en|ko)',
      component: page('/language-root'),
      children: routes
    }
  ]
})
