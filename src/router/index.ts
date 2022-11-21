import { createRouter, createWebHashHistory, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'



const routes: Array<RouteRecordRaw> = [
  {
    component: Layout,
    path: '/',
    children: [
      {
        path: '/king-data-solution',
        name: 'KingDataSolution',
        component: () => import('@/views/king-data-solution/index.vue')
      }, {
        path: '/king-job-solution',
        name: 'KingJobSolution',
        component: () => import('@/views/king-job-solution/index.vue')
      }
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
