import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UniDetail from '@/views/UniDetail.vue'
import About from '@/views/About.vue'
import Universities from '@/views/Universities.vue'
import Contact from '@/views/Contact.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Dashboard from '@/views/University Dashboard/Dashboard.vue'
import ProgramDetail from '@/components/University Dashboard/ProgramDetail.vue'
import Program from '@/components/Program.vue'
import NewProgram from '@/components/University Dashboard/NewProgram.vue'
import ProfileEdit from '@/components/University Dashboard/ProfileEdit.vue'

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
      path: '/university-dashboard',
      name: 'university-dashboard',
      component: Dashboard,
    },
    {
      path: '/program-details',
      name: 'program-details',
      component: ProgramDetail,
    },
    {
      path: '/programs',
      name: 'programs',
      component: Program,
    },
    {
      path: '/new-program',
      name: 'new-program',
      component: NewProgram,
    },
    {
      path: '/uni-profile-edit',
      name: 'uni-profile-edit',
      component: ProfileEdit,
    },
  ],
})

export default router
