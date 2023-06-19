import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Choose',
    component: () => import('@/views/Choose.vue')
  },
  {
    path: '/drface', 
    name: 'Drface', 
    component: () => import('@/views/skincare/Home.vue')
  },
  {
    path: '/clinic',
    name: 'Clinic',
    component: () => import('@/views/clinic/Home.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
