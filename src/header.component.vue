<style lang="scss">

@import './colors.scss';

#header {
  min-height: 50px;
  color: $text-color;

  padding: 10px;
}

#header p {
  padding: 0;
  margin: 0;

  color: $text-color;
}

#header nav {
  justify-content: right; 
}

#header a {
  display: inline;
  color: $text-color;
}

.hover:hover {
  color: $hover-color !important;
}

.social-link {
  font-size: 48px;
  color: $text-color !important;
  display:  inline-block !important;
}

</style>

<template>

  <div id="header">
    
    <div class="row">

      <div class="col d-flex align-items-center" id="header-title">
        <div>
          <p class="fs-5">PJT</p>
          <p class="fs-6 fw-light">Distributed systems, containerization, and happy servers</p>
        </div>
      </div>

      <div class="col">
        <nav class="navbar">
          <a href="https://github.com/pthomison"  class="nav-link social-link hover">
            <font-awesome-icon icon="fa-brands fa-github"/>
          </a>
          <div class="vr"></div>
          <a href="https://www.linkedin.com/in/patrickthomison/" class="nav-link social-link hover">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
          <div class="vr"></div>
          <a href="https://github.com/pthomison/pthomison.github.io" class="nav-link hover">this website's <br> source code</a>
          <div class="vr"></div>
          <a href="https://github.com/pthomison?tab=repositories" class="nav-link hover">my projects</a>
        </nav>
      </div>

    </div>

    <hr/>
  </div>

</template>