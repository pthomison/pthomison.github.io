<style type="text/css">
  
#header {
  min-height: 50px;
  color: white;

  padding: 10px;
}

#header h1,#header h2,#header h3,#header h4,#header h5,#header h6, #header p {
  padding: 0;
  margin: 0;

  color: white;
}

#header nav {
  justify-content: right; 
}

#header a {
  display: inline;
  color: white;
}

.social-link {
  font-size: 48px;
  color: white !important;
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
          <a href="https://github.com/pthomison"  class="nav-link social-link">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
          <div class="vr"></div>
          <a href="https://www.linkedin.com/in/patrickthomison/" class="nav-link social-link">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
          </a>
          <div class="vr"></div>
          <a href="https://github.com/pthomison/pthomison.github.io" class="nav-link">this website's <br> source code</a>
          <div class="vr"></div>
          <a href="https://github.com/pthomison?tab=repositories" class="nav-link">my projects</a>
        </nav>
      </div>

    </div>

    <hr/>
  </div>

</template>