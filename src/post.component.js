import Vue from 'vue';

const post = `
<table class="table">
  <tbody>
    <tr>
      <th scope="row">{{ date }}: {{ title }}</th>
    </tr>
    <tr>
      <markdown-content v-bind:raw-markdown="content"></markdown-content>
    </tr>
  </tbody>
</table>
`;

Vue.component('post', {
	props: ['title', 'date', 'content'],
	template: post
});