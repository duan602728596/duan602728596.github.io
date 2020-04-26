<template>
  <!-- 文章页模板 -->
  <!-- 返回顶部 -->
  <div class="position-fixed articleGoToTop"
    title="返回顶部"
    tabindex="0"
    role="button"
    aria-label="返回顶部"
  >
    <img class="articleGoToTopIcon" src="/static/images/go-to-top.png" alt='返回顶部' @click="handleGoToTopClick($event)">
  </div>
</template>

<script>
  import { defineComponent } from '@vue/composition-api';
  import TWEEN from '@tweenjs/tween.js';

  // 动画
  let timer = null;

  function animate(time) {
    timer = requestAnimationFrame(animate);
    TWEEN.update(time);
  }

  // 返回顶部
  function handleGoToTopClick($event) {
    const { keyCode, type } = $event;
    const coords = { top: document.documentElement.scrollTop || document.body.scrollTop };

    if ((type === 'keyup' && keyCode === 13) || type === 'click') {
      timer = requestAnimationFrame(animate);
      new TWEEN.Tween(coords)
        .to({ top: 0 }, 300)
        .onUpdate(() => {
          window.scroll(0, coords.top);

          if (coords.top === 0) {
            cancelAnimationFrame(timer);
            timer = null;
          }
        })
        .start();
    }
  }

  export default defineComponent({
    setup() {
      return {
        handleGoToTopClick
      };
    }
  });
</script>

<style lang="scss" scoped>
  /* 返回顶部 */
  .articleGoToTop {
    right: 50px;
    bottom: 70px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    opacity: .2;
    transition: opacity .3s;

    &:hover {
      opacity: .6;
    }
  }

  .articleGoToTopIcon {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>