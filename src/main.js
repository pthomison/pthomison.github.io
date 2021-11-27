import * as Vue from 'Vue';

import HeaderComponent from './header.component.vue';

const app = Vue.createApp({
  /* options */
})

app.component('header-component', HeaderComponent)

const vm = app.mount('#app')
