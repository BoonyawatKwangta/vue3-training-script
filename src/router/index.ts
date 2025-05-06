import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ---------- Basic Composables
    {
      path: '/basic-composables',
      name: 'BasicComposablePage',
      component: () => import('@/views/BasicComposablePage.vue')
    },
    // ---------- Basic Pinia
    {
      path: '/basic-pinia',
      name: 'BasicPiniaPage',
      component: () => import('@/views/BasicPiniaPage.vue')
    },
    {
      path: '/basic-essentials',
      name: 'BasicEssentialPage',
      component: () => import('@/views/BasicEssentialPage.vue')
    },
    // ---------- Basic Component
    {
      path: '/basic-components',
      name: 'BasicComponentPage',
      component: () => import('@/views/BasicComponentPage.vue')
    },
    // ---------- Basic Router
    // Router View & Router Link
    {
      path: '/basic-router',
      name: 'BasicRouterPage',
      component: () => import('@/views/BasicRouterPage.vue')
    },
    // Dynamic Route
{
  path: '/product/:id',
  name: 'BasicProductPage',
  component: () => import('@/views/ProductPage.vue')
},
    // Nested Routes
    {
      path: '/default',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'HomePage',
          component: () => import('@/views/HomePage.vue')
        },
        {
          path: 'about',
          name: 'AboutPage',
          component: () => import('@/views/AboutPage.vue')
        },
      ]
    },
    // Redirect & Alias
    {
      path: '/',
      redirect: '/basic-essentials'
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('@/views/AboutPage.vue'),
      alias: ['/foo', '/bar', '/baz']
    },
    // Navigation Guard
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/LoginPage.vue')
    },
  ]
})

// Navigation Guard
// const router = [{
//   path: '/home',
//   name: 'HomePage',
//   component: () => import('@/views/HomePage.vue'),
//   meta: { requireAuth: true }
// }]
// let isAuthenticated = false

// router.beforeEach((to, form, next) => {
//   if (
//     to.name !== 'Login'&& 
//     to.meta?.requireAuth &&
//     !isAuthenticated
//   ) {
//     next({ name: 'LoginPage' })
//   } else {
//     next()
//   }
// })

export default router
