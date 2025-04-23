import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UniDetail from '@/views/UniDetail.vue'
import About from '@/views/About.vue'
import Universities from '@/views/Universities.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/universities-details',
      name: 'university details',
      component: UniDetail,
    },
    {
      path: '/universities',
      name: 'universities',
      component: Universities,
    },
    {
      path: '/about',
      name: '/About',
      component: About,
    }
  ],
})

export default router
