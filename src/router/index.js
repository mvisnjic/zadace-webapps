import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../components/IndexPage.vue'
const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexPage,
    },
    {
        path: '/details',
        name: 'details',
        component: () => import('../components/SecondPage.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
