import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/Index'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/index',
            component: Index,
        }
    ]
})