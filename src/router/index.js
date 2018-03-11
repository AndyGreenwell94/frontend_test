import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/Index'
import SeriesList from '../components/SeriesList'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/index',
            component: Index,
        },
        {
            path: '/list',
            component: SeriesList,
        }
    ]
})