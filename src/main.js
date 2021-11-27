import * as Vue from 'Vue';

import HeaderComponent from './header.component.vue';
import AboutMeComponent from './about-me.component.vue';

const app = Vue.createApp({
  /* options */
})

app.component('header-component', HeaderComponent)
app.component('about-me-component', AboutMeComponent)

const vm = app.mount('#app')
