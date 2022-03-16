import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeScreen,
    },
    {
        path: '/secondpage',
        name: 'SecondPage',
        component: () => import('../views/SecondPage.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
