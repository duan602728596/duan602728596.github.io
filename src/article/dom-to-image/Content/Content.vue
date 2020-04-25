<template>
  <article class="articleLayout">
    <h1 class="articleTitle">用Javascript将DOM绘制成图片</h1>

    <!-- 正文 -->
    <article class="articleParagraph">
      <p>
        之前看到了一个动画，
        <a href="https://jdc.jd.com/lab/2018-ae2css/washer/" target="_blank">
          https://jdc.jd.com/lab/2018-ae2css/washer/
        </a>
        ，就琢磨着怎么简单实现一下。要做的，就是将DOM的内容原原本本复制，并绘制成图片。
      </p>
    </article>

    <!-- 实现原理 -->
    <article class="articleParagraph">
      <h2 class="articleTitle2">实现原理</h2>
      <p>
        SVG的
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/foreignObject" target="_blank">foreignObject</a>
        标签，可以包含html片段，这样就可以将整个DOM片段转换成SVG。
      </p>
      <p>
        不过要注意的是，在svg里面的<b>class</b>是无效的，样式只有<b>style="key: value;"</b>才能生效。
        可以使用<b>window.getComputedStyle</b>来获取DOM的样式。如果嫌麻烦，还可以使用
        <a href="https://github.com/niklasvh/html2canvas" target="_blank">html2canvas</a>库。
      </p>
      <p>SVG内DOM节点的xmlns属性不能省略。</p>
      <HighLight type="javascript">{{ codeText[0] }}</HighLight>
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
    name: 'Content',
    components: {
      HighLight,
      Demo
    },
    setup() {
      return { codeText };
    }
  });
</script>

<style src="../../../components/Article/article.scss" lang="scss" scoped></style>