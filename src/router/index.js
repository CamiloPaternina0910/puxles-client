import CreateViewVue from '@/components/pages/Create/CreateView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/pages/Home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/products?page=:page&elements=:elements',
    name: 'homeWihtParams',
    component: HomeView
  },
  {
    path:'/product?name=:name',
    name: 'homeWihtParamsName',
    component: HomeView
  },
  {
    path: '/product/create',
    name: 'create',
    component: CreateViewVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
