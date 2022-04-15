import { createRouter, createWebHistory } from 'vue-router'
import Task1 from '../components/Task1'
import Task2 from '../components/Task2'
import Task3 from '../components/Task3'


const routes = [
  {
    path: '/task1',
    name: 'taks1',
    component: Task1
  },
  {
    path: '/task2',
    name: 'taks2',
    component: Task2
  },
  {
    path: '/task3',
    name: 'taks3',
    component: Task3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
