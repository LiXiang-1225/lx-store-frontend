import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'Home',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/',
        redirect: { name: 'Home' }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
