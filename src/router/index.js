import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '../components/IndexPage.vue'
const routes = [
    {
        path: '/',
        name: 'Index',
        component: IndexPage,
    },
    {
        path: '/secondpage',
        name: 'SecondPage',
        component: () => import('../components/SecondPage.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
