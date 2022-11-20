import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'



// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [{
  path: '/',
  component: Layout,
  children: [{
    path: '/data-king/:id',
    name: 'DataKing',
    component: () => import('@/view/data-king/DataKingMain.vue')
  }, {
    path: '/data-job/:id',
    name: 'DataJob',
    component: () => import('@/view/data-job/DataJobMain.vue')
  }]
}]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
