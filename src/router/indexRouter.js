import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login&Signup/LoginView.vue')
    },
    {
      path: '/singup',
      name: 'sinup',
      component: () => import('../views/Login&Signup/SignupView.vue')
    }
  ]
})

export default router
