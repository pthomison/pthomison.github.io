import Vue from 'vue';

const header = `
<div id="header">
  
  <div class="row">

    <div class="col">
      <h4>Patrick Thomison</h4>
      <h6>Distributed systems, containerization, and happy servers</h6>
    </div>

    <div class="col">
      <nav class="top-50">
        <a href="#">about me</a>
        <a href="#">about this site</a>
        <a href="#">projects</a>
      </nav>
    </div>

  </div>

  <hr/>
</div>
`;

Vue.component('header-component', {
  props: [],
  template: header
});