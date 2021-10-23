import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index";
import Blogs from '../views/Blogs.vue'
import BlogDetail from '../views/BlogDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    redirect: {name :'Index'},
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
  },

  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail,
    meta: {
      requireAuth: true
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
