import * as Vue from 'Vue';
import * as VueRouter from 'vue-router';

import HeaderComponent from './header.component.vue';
import AboutMeComponent from './about-me.component.vue';

const root = Vue.createApp({})

const routes = [
  { path: '/', component: AboutMeComponent },
]

root.component('header-component', HeaderComponent)

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

root.use(router)
const vm = root.mount('#app')



