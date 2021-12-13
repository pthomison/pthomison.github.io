<template>

  <div id="header">
    
    <div class="row">

      <div class="col">
        <p class="fs-5">PJT</p>
        <p class="fs-6 fw-light">Distributed systems, containerization, and happy servers</p>
      </div>

      <div class="col">
        <nav class="navbar">
          <a href="#"  class="nav-link" @click="$emit('changePage', 'about-me')">about me</a>
          <div class="vr"></div>
          <a href="#" class="nav-link" @click="$emit('changePage', 'about-this-site')">about this site</a>
          <div class="vr"></div>
          <a href="#" class="nav-link" @click="$emit('changePage', 'projects')">projects</a>
        </nav>
      </div>

    </div>

    <hr/>
  </div>

</template>