import { createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('@/layout/index.vue')
const Home = () => import('@/views/home/index.vue')
const Me = () => import('@/views/me/index.vue')
const Messages = () => import('@/views/messages/index.vue')

export const routes = [{
    path: '/redirect',
    hidden: true,
    component: Layout,
    children: [
        {
            path: '/redirect/:path(.*)',
            component: () => import('@/views/redirect')
        }
    ]
},
{ path: '/', name: 'layout', component: Layout, },
{ path: '/home', name: 'home', component: Home, },
{ path: '/me', name: 'me', component: Me },
{ path: '/messages', name: 'messages', component: Messages },
]
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes
})

export default router
