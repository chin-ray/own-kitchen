import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

export const routes = [
    {
        path: '/redirect',
        component: Layout,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect')
            }
        ]
    },
    {
        path: '/sign-up', // 注册
        component: () => import('@/views/sign-pages/SignUp.vue')
    },
    {
        path: '/sign-in', // 登录
        component: () => import('@/views/sign-pages/SignIn.vue')
    },
    {
        path: '/404',
        component: () => import('@/views/error-pages/404.vue')
    },
    {
        path: '/401',
        component: () => import('@/views/error-pages/401.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: 'home',
        children: [
            { path: '/home', name: 'home', component: () => import('@/views/home/index.vue') },
            { path: '/me', name: 'me', component: () => import('@/views/me/index.vue') },
            { path: '/messages', name: 'messages', component: () => import('@/views/messages/index.vue'), },
        ]
    },
    {
        path: '/messages/detail',
        name: 'mesDetail',
        component: () => import('@/views/messages/detail.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: routes
})

export default router
