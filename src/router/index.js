import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'Theme',
        path: '',
        component: () => import('../views/Theme.vue')
      },
      {
        name: 'Form',
        path: 'form',
        component: () => import('../views/Form.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
