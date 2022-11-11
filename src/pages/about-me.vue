<script>

import ProfilePic from '../static/profile.jpg';

export default {
  data() {
    return {
      ProfilePic: ProfilePic,
    };
  },
};

</script>

<style lang="scss">

#profile-picture {
  border-radius: 8px;
}

#about-me {
  padding: 10px;
}

</style>


<template>

  <header-component></header-component>

  <div class="row" id="about-me">
    <div class="col-md-1"></div>
    <div class="col-md-8">
      <div class="row">
        <p class="fs-4">Hi! I'm Patrick</p>
      </div>

      <div class="row">
        <p class="fs-6 fw-light">I'm a devops engineer based in the PNW. I specialize in kubernetes based stacks, but I find myself wherever the interesting problems are. Interested in containers, the cloud, and tooling that makes lives easier (hopefully mine).</p>
      </div>
    </div>

    

    <div class="col-md-2"><img id="profile-picture" v-bind:src="ProfilePic" style="width: 200px"></div>
    <div class="col-md-1"></div>
  </div>

</template>


