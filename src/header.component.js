import Vue from 'vue';

const header = `
<div id="header" class="">
  <h4>Patrick Thomison</h4>
  <h6>Distributed systems, containerization, and happy servers</h6>
  <hr/>
</div>
`;

// Vue.component('header', {
// 	props: ['title', 'date', 'content'],
// 	template: post
// });

Vue.component('header-component', {
  props: [],
  template: header
});