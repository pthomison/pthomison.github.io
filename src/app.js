import * as Vue from 'Vue';

import HeaderComponent from './header.component.vue';
import AboutMeComponent from './about-me.component.vue';
import AboutThisSiteComponent from './about-this-site.component.vue';

const app = Vue.createApp({
  data() {
    return {
      page: "about-me"
    }
  },
  methods: {
    print(x) {
      console.log(x)
    },
    changePage(x) {
      this.page = x
    },
  },
})

app.component('header-component', HeaderComponent)
app.component('about-me-component', AboutMeComponent)
app.component('about-this-site-component', AboutThisSiteComponent)

const vm = app.mount('#app')
