import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Brazil from '../views/Brazil.vue'
import Jamaica from '../views/Jamaica.vue'
import Panama from '../views/Panama.vue'
import Hawai from '../views/Hawai.vue'


const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/brazil',name: 'Brazil',component: Brazil},
  {path: '/hawai',name: 'Hawai',component: Hawai},
  {path: '/jamaica',name: 'Jamaica',component: Jamaica},
  {path: '/panama',name: 'Panama',component: Panama},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
