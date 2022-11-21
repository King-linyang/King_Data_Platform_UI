import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'



const routes: Array<RouteRecordRaw> = [
  {
    component: Layout,
    path: '/',
    children: [

    ]
  },
  // {
  //   path: '/register',
  //   component: () => import('../components/b.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
