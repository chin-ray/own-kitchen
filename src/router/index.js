import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/home/index.vue')
const Me = () => import('@/views/me/index.vue')
const Messages = () => import('@/views/messages/index.vue')

const routes = [
    { path: '/', name: 'home', component: Home, },
    { path: '/me', name: 'me', component: Me },
    { path: '/messages', name: 'messages', component: Messages },
]
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes
})

export default router
