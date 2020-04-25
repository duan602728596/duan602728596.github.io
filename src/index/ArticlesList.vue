<template>
  <!-- 文章列表 -->
  <div class="articleList">
    <div class="list-group">
      <a class="list-group-item" href="/article/queue-in-js.html">用JS实现多个任务并行执行的队列</a>
      <a class="list-group-item" href="/article/js-copy.html">Javascript实现复制功能</a>
      <a class="list-group-item bg-light text-success"
        href="https://blog.bitsrc.io/10-useful-web-apis-for-2020-8e43905cbdc5"
        target="_blank"
      >
        用JS实现多个任务并行执行的队列
      </a>
      <a class="list-group-item" href="/article/static-resource-in-typescript.html">如何在typescript内引入静态资源</a>
      <a class="list-group-item" href="/article/linear-gradient-animate.html">使用SVG，让渐变的背景也能动起来</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArticleList'
  };
</script>

<style lang="scss" scoped>
  .articleList {
    margin: 0 auto 32px;
    width: 800px;
  }

  @media screen and (max-width: 832px) {
    .articleList {
      padding: 0 16px;
      width: 100%;
    }
  }
</style>