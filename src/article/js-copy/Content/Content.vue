<template>
  <article class="articleLayout">
    <h1 class="articleTitle">Javascript实现复制功能</h1>

    <!-- 代码实现 -->
    <article class="articleParagraph">
      <h2 class="articleTitle2">代码实现</h2>
      <p>html5的webAPI接口可以很轻松的使用短短的几行代码就实现复制功能，不需要依赖flash。</p>
      <HighLight type="javascript">{{ codeText[0] }}</HighLight>
      <p>当element为表单控件时，代码可以简化成：</p>
      <HighLight type="javascript">{{ codeText[1] }}</HighLight>
    </article>

    <!-- 代码演示 -->
    <article class="articleParagraph">
      <h2 class="articleTitle2">代码演示</h2>
      <p>复制下面这句话，然后粘贴到文本框中。</p>
      <blockquote class="p-3 blockquot shadow-none bg-light rounded">
        <p ref="copyTextRef">苟利国家生死以，岂因祸福避趋之。 --林则徐</p>
      </blockquote>
      <textarea ref="textareaRef" class="d-block mb-3 form-control" rows="3" v-model="textAreaValue"></textarea>
      <div class="text-right">
        <button class="mr-2 btn btn-danger" type="button" @click="handleClearTextAreaClick">清空文本框</button>
        <button class="mr-2 btn btn-secondary" type="button" @click="handleCopyFormControlClick">复制文本框内的文本</button>
        <button class="btn btn-primary" @click="handleCopyDefaultClick">复制</button>
      </div>
    </article>
  </article>
</template>

<script>
  import { defineComponent, ref } from '@vue/composition-api';
  import HighLight from '../../../components/HighLight/HighLight';
  import codeText from './codeText';

  export default defineComponent({
    name: 'Content',
    components: {
      HighLight
    },
    setup(props, { refs }) {
      const textAreaValue = ref('');

      //
      function handleCopyDefaultClick() {
        const range = document.createRange();

        range.selectNode(refs.copyTextRef); // 设定range包含的节点对象

        // 窗口的selection对象，表示用户选择的文本
        const selection = window.getSelection();

        // 将已经包含的已选择的对象清除掉
        if (selection.rangeCount > 0) {
          selection.removeAllRanges();
        }

        // 将要复制的区域的range对象添加到selection对象中
        selection.addRange(range);
        document.execCommand('copy');
      }

      // 表单复制
      function handleCopyFormControlClick() {
        refs.textareaRef.select();
        document.execCommand('copy');
      }

      // 清空文本框
      function handleClearTextAreaClick() {
        textAreaValue.value = '';
      }

      return { codeText, textAreaValue, handleCopyDefaultClick, handleCopyFormControlClick, handleClearTextAreaClick };
    }
  });
</script>

<style src="../../../components/Article/article.scss" lang="scss" scoped />