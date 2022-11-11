<style lang="scss">

#header {
  min-height: 50px;
  padding: 10px;
}

#header p {
  padding: 0;
  margin: 0;
}

#header nav {
  justify-content: right; 
}

#header a {
  display: inline;
  text-decoration: none;
}

.social-link {
  font-size: 48px;
  display:  inline-block !important;
}

</style>

<template>

  <div id="header">
    
    <div class="row">

      <div class="col d-flex align-items-center" id="header-title">
        <div>
          <router-link to="/"><p class="fs-5 hover">PJT</p></router-link>
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
          <a href="https://github.com/pthomison?tab=repositories" class="nav-link hover">projects</a>
          <div class="vr"></div>
          <a href="/#/posts" class="nav-link hover">posts</a>
        </nav>
      </div>

    </div>

    <hr/>
  </div>

</template>