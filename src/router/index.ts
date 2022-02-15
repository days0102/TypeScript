import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'

// @ts-ignore
// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('../views/RegisterView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/LoginView.vue')
    },
    {
      path:'/article',
      name:'article',
      component:()=>import('../views/ArticlesView.vue')
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:()=>import('../views/ArticleDetail.vue')
    },
    {
      path:'/create/',
      name:'create',
      component:()=>import('../views/CreateArticleView.vue')
    },
    {
      path:'/blank',
      name:'blank',
      component:()=>import('../views/BlankView.vue')
    }
  ]
})

export default router
