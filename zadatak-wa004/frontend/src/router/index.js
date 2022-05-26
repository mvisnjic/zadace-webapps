import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/indexScreen.vue'
import Second from '../components/secondScreen.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/details/:isbn',
        name: 'details',
        component: Second,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
