import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
import Register from "../views/Register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: {name :"Blogs"},
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name:'Register',
    component: Register
  },
  {
    path: '/blog/add',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
