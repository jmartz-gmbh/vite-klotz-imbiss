import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import Card from '../pages/card.vue';
import Anfrage from '../pages/anfrage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/karte', component: Card },
  { path: '/anfrage', component: Anfrage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})