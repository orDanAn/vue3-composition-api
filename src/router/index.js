import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import('../views/Task.vue')
  },
  {
    path: '/',
    name: 'Tasks',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/New.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
