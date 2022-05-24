import { createRouter, createWebHistory } from 'vue-router'
// const Login = () => import('../views/login/login.vue')
const Home = () => import('@/views/home/index.vue')
// const About = () => import('../views/about/about')
const routes = [
    // { path: '/', name: 'login', component: Login },
    { path: '/', name: 'home', component: Home, },
    // { path: '/about', name: 'about', component: About },
]
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes
})

export default router
