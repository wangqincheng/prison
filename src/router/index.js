import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: '/assess',
    component: Home,
    children: [{
        path: '/assess',
        name: 'assess',
        component: () => import('@/views/assess')
      },
      {
        path: '/deduct',
        name: 'deduct',
        component: () => import('@/views/deduct')
      },
      {
        path: '/backlog',
        name: 'backlog',
        component: () => import('@/views/backlog')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router