import { createApp } from 'Vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import HeaderComponent from './header.component.vue';
import AboutMeComponent from './about-me.component.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faLinkedin);

const root = createApp({});

const routes = [
  { path: '/', component: AboutMeComponent },
];

root.component('header-component', HeaderComponent);
root.component('font-awesome-icon', FontAwesomeIcon);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

root.use(router);
root.mount('#app');



