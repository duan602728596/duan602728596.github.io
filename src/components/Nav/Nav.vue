<template>
  <!-- 网站导航 -->
  <nav class="position-sticky sticky-top mb-5 navbar navbar-dark bg-dark">
    <div class="navBox clearfix">
      <div class="float-left">
        <a class="navbar-brand" href="/">文章</a>
        <a class="navbar-brand" href="/project.html">开源项目</a>
      </div>
      <div class="float-right">
        <a class="navbar-brand" href="https://github.com/duan602728596">
          <img class="navIcon" src="/static/images/github.png" alt="github">
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavComponent'
  };
</script>

<style lang="scss" scoped>
  .navBox {
    margin: 0 auto;
    width: 800px;
  }

  .navIcon {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 832px) {
    .navBox {
      width: 100%;
    }
  }
</style>