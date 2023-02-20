import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: () => import('../views/Pedidos.vue')
    }
  ]
})

export default router
