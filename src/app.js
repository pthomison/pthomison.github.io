import * as Vue from 'Vue';
import * as VueRouter from 'vue-router';

import HeaderComponent from './header.component.vue';
import AboutMeComponent from './about-me.component.vue';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)
library.add(faLinkedin)

const root = Vue.createApp({})

const routes = [
  { path: '/', component: AboutMeComponent },
]

root.component('header-component', HeaderComponent)
root.component('font-awesome-icon', FontAwesomeIcon)

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

root.use(router)
const vm = root.mount('#app')



