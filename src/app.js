import { createApp } from 'Vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import HeaderComponent from './components/header.vue';
import PostComponent from './components/post.vue';

import AboutMePage from './pages/about-me.vue';
import PostsPage from './pages/posts.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);
library.add(faLinkedin);

const root = createApp({});

const routes = [
  { path: '/', component: AboutMePage },
  { path: '/posts', component: PostsPage },
];

root.component('header-component', HeaderComponent);
root.component('post-component', PostComponent);
root.component('font-awesome-icon', FontAwesomeIcon);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

root.use(router);
root.mount('#app');



