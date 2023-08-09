import {createRouter,createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateEventView from '../views/Event/CreateView.vue'
import EventsView from '../views/Event/EventsView.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/event',
            name: 'createEvent',
            component: CreateEventView,
        },
        {
            path: '/all',
            name: 'listEvents',
            component: EventsView,
        },

    ]
})