import { createRouter, createWebHistory } from 'vue-router'
import MusicHome from '../views/MusicHome.vue'
import Build from '../views/Build.vue'
import TakeOn from '../views/TakeOn.vue'
import Cure from '../views/Cure.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: MusicHome
    },
    {
        path: '/build',
        name: 'build',
        component: Build
    },
    {
        path: '/take-on',
        name: 'take on',
        component: TakeOn
    },
    {
        path: '/cure',
        name: 'cure',
        component: Cure
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router