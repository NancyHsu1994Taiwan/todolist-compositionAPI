import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'allTask',
      component: () => import('../views/Tasklist/AllTask.vue')
    },
    {
      path: '/taskYet',
      name: 'taskYet',
      component: () => import('../views/Tasklist/TaskYet.vue')
    },
    {
      path: '/taskDone',
      name: 'taskDone',
      component: () => import('../views/Tasklist/TaskDone.vue')
    }
  ]
})

export default router
