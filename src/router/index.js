import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destinations from '../views/Destinations.vue'


const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/destination/:id',name: 'destination',component: Destinations},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
