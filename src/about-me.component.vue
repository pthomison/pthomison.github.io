<template>
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="row">
        <p class="fs-4">Hi! I'm Patrick</p>
      </div>

      <div class="row">
        <p>I'm a devops engineer based in the PNW. I specialize in kubernetes based stacks, but I find myself wherever the interesting problems are. Interested in containers, the cloud, and tooling that makes lives easier (hopefully mine).</p>
      </div>

      <nav class="navbar social-bar">
          <a href="https://github.com/pthomison"  class="nav-link social-link">
            <i class="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/patrickthomison/" class="nav-link social-link">
            <i class="fab fa-linkedin"></i>
          </a>
      </nav>
    </div>

    <div class="col-md-1"></div>
  </div>
</template>

<!-- <script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script> -->

<style>
p {
  color: white;
}
.social-bar {
  justify-content: flex-start;
}

.social-link {
  font-size: 48px;
  color: white !important;
  display:  inline-block !important;
}
</style>