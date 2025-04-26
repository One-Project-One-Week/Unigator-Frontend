import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UniDetail from '@/views/UniDetail.vue'
import About from '@/views/About.vue'
import Universities from '@/views/Universities.vue'
import Contact from '@/views/Contact.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ProgramDetail from '@/views/ProgramDetail.vue'
import { authMiddleware } from '@/middleware/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/universities-details/:slug',
      name: 'university-details',
      component: UniDetail,
      props: true,
      beforeEnter: authMiddleware,
    },
    {
      path: '/universities',
      name: 'universities',
      component: Universities,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/program-details/:id',
      name: 'program-details',
      component: ProgramDetail,
      props: true,
      beforeEnter: authMiddleware,
    },
    {
      path: '/programs',
      name: 'programs',
      component: ProgramDetail,
      beforeEnter: authMiddleware,
    }
  ],
})

export default router
