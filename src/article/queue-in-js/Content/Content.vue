<template>
  <article class="articleLayout">
    <h1 class="articleTitle">用JS实现多个任务并行执行的队列</h1>

    <!-- 使用场景 -->
    <article class="articleParagraph">
      <h2 class="articleTitle2">使用场景</h2>
      <p>
        今天在开发时，碰到了这么一个需求：需要上传多个视频文件；每个文件的上传在新线程内执行；同时最多有三个上传任务在执行；
        当一个任务执行完毕，执行下一个任务。这个需求就是并行执行队列内的任务。
      </p>
      <p>为了能够满足要求，需要知道可以同时执行的任务数、任务队列、正在执行的任务。当一个任务执行完毕后，需要分配下一个执行的任务。</p>
    </article>

    <!-- 代码实现 -->
    <article class="articleParagraph">
      <h2 class="articleTitle2">代码实现</h2>
      <p>首先定义一个类：</p>
      <HighLight type="javascript">{{ codeText[0] }}</HighLight>
      <p>定义一个延迟执行的异步函数，并执行任务，测试代码是否满足需求：</p>
      <HighLight type="javascript">{{ codeText[1] }}</HighLight>
      <p>在控制台上会输出：</p>
      <HighLight type="javascript">{{ codeText[2] }}</HighLight>
      <p>可以看到，开始时执行了三个任务；每当有任务执行完毕，就会执行下一个任务。这样就满足了并行执行队列内的任务的需求。</p>
    </article>

    <!-- 代码演示 -->
    <Demo />
  </article>
</template>

<script>
  import { defineComponent } from '@vue/composition-api';
  import HighLight from '../../../components/HighLight/HighLight';
  import Demo from './Demo';
  import codeText from './codeText';

  export default defineComponent({
    components: {
      HighLight,
      Demo
    },
    setup() {
      return { codeText };
    }
  });
</script>

<style src="../../../components/Article/article.scss" lang="scss" scoped />