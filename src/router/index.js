import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destinations from '../views/Destinations.vue'
import ExperenceShow from '../components/ExperenceShow.vue'
import NotFound from '../views/NotFound.vue'
import SourceData from '@/data.json'
import DeshBoard from '../views/DeshBorad.vue'


const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/destination/:id',name: 'destination',component: Destinations,
  beforeEnter(to){
    const exists =SourceData.destinations.find(
      destination =>destination.id ===parseInt(to.params.id)
    )
    if(!exists) return {
      name:'NotFound',
      params:{pathMatch:to.path.split('/').slice(1)},
      query:to.query
    }
  },
  children:[
    {
      path:':experienceSlug',
      name:'experience',
      component:ExperenceShow,
      props:route=>({...route.params,id:parseInt(route.params.id)})
    }
  ]
},
{path: '/deshBoard',name: 'DeshBoard',component: DeshBoard},
{path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
