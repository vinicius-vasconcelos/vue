import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cursos from './views/Cursos.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL, //se tiver arquivos dentro de uma pasta interna
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/cursos',
            name: 'Cursos',
            component: Cursos
        },
    ]
})