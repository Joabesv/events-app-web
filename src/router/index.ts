import {createRouter,createWebHistory} from 'vue-router'
import viewHome from '../views/viewHome.vue'
import viewCreateEvent from '../views/Event/viewCreate.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: viewHome,
        },
        {
            path: '/event',
            name: 'createEvent',
            component: viewCreateEvent,
        }
    ]
})