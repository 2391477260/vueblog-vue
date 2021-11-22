import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index";
import Blogs from '../views/Blogs.vue'
import BlogDetail from '../views/BlogDetail.vue'
import EditBlog from "../views/EditBlog";

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
    path: '/edit',
    name: 'EditBlog',
    component: EditBlog,
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
  },
  {
    path: '/blogDetail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
