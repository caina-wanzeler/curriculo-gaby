import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '@/components/views/SobreView.vue';
import HomeView from '@/components/views/HomeView.vue';
import PortfolioView from '@/components/views/PortfolioView.vue';
import ContatoView from '@/components/views/ContatoView.vue';



const routes = [
    {
        path: '/curriculo-gaby/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/curriculo-gaby/portfolio',
        name: 'portfolio',
        component: PortfolioView
    },
    {
        path: '/curriculo-gaby/contato',
        name: 'contato',
        component: ContatoView
    },
    {
        path: '/curriculo-gaby/sobre',
        name: 'sobre',
        component: InicioView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;